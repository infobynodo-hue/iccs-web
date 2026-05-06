'use client';

// Interactive COBE globe showing the iCCS global medical network.
// Markers = oncology hubs rendered as hospital crosses (+) on an overlay canvas.
// Arcs = knowledge connections between them.
import { useEffect, useRef, useCallback } from 'react';
import createGlobe from 'cobe';

// ── Medical network locations ──────────────────────────────────────────────
const MARKERS = [
  { location: [40.42, -3.70] as [number, number], size: 0.055 },   // Madrid
  { location: [41.38,  2.17] as [number, number], size: 0.04  },   // Barcelona
  { location: [-34.60, -58.38] as [number, number], size: 0.055 }, // Buenos Aires
  { location: [19.43, -99.13] as [number, number], size: 0.045 },  // Ciudad de México
  { location: [4.71, -74.07] as [number, number], size: 0.04  },   // Bogotá
  { location: [-12.04, -77.03] as [number, number], size: 0.038 }, // Lima
  { location: [-23.55, -46.63] as [number, number], size: 0.045 }, // São Paulo
  { location: [-33.46, -70.65] as [number, number], size: 0.038 }, // Santiago
  { location: [40.71, -74.01] as [number, number], size: 0.048 },  // Nueva York
  { location: [25.76, -80.19] as [number, number], size: 0.038 },  // Miami
  { location: [51.51,  -0.13] as [number, number], size: 0.045 },  // Londres
  { location: [48.86,  2.35 ] as [number, number], size: 0.042 },  // París
  { location: [52.52, 13.40 ] as [number, number], size: 0.038 },  // Berlín
  { location: [45.46, 9.19  ] as [number, number], size: 0.035 },  // Milán
  { location: [-1.28, 36.82 ] as [number, number], size: 0.03  },  // Nairobi
  { location: [1.36, 103.99 ] as [number, number], size: 0.035 },  // Singapur
  { location: [35.55, 139.78] as [number, number], size: 0.04  },  // Tokio
];

// Arcs: knowledge exchange between oncology centers
const ARCS = [
  { from: [40.42, -3.70] as [number, number], to: [-34.60, -58.38] as [number, number] },
  { from: [40.42, -3.70] as [number, number], to: [19.43,  -99.13] as [number, number] },
  { from: [40.42, -3.70] as [number, number], to: [4.71,   -74.07] as [number, number] },
  { from: [40.42, -3.70] as [number, number], to: [51.51,   -0.13] as [number, number] },
  { from: [51.51, -0.13] as [number, number], to: [48.86,    2.35] as [number, number] },
  { from: [48.86,  2.35] as [number, number], to: [-23.55, -46.63] as [number, number] },
  { from: [40.71, -74.01] as [number, number], to: [51.51,  -0.13] as [number, number] },
  { from: [25.76, -80.19] as [number, number], to: [-34.60, -58.38] as [number, number] },
  { from: [-23.55, -46.63] as [number, number], to: [-33.46, -70.65] as [number, number] },
  { from: [4.71,  -74.07] as [number, number], to: [-12.04, -77.03] as [number, number] },
  { from: [51.51,  -0.13] as [number, number], to: [1.36,  103.99] as [number, number] },
  { from: [48.86,   2.35] as [number, number], to: [35.55, 139.78] as [number, number] },
];

// ── Project a geographic coordinate to screen (x, y) + visibility z ───────
function projectMarker(
  lat: number, lng: number,
  phi: number, theta: number,
  w: number, h: number
): { x: number; y: number; z: number } | null {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180;

  // Cartesian point on unit sphere
  const x0 = Math.cos(latR) * Math.cos(lngR);
  const y0 = Math.sin(latR);
  const z0 = Math.cos(latR) * Math.sin(lngR);

  // Rotate around Y-axis by phi (horizontal spin)
  const x1 =  Math.cos(phi) * x0 + Math.sin(phi) * z0;
  const y1 = y0;
  const z1 = -Math.sin(phi) * x0 + Math.cos(phi) * z0;

  // Rotate around X-axis by theta (vertical tilt)
  const y2 =  Math.cos(theta) * y1 - Math.sin(theta) * z1;
  const z2 =  Math.sin(theta) * y1 + Math.cos(theta) * z1;

  if (z2 < 0.01) return null; // back-face culling

  const r = w / 2;
  return {
    x: w / 2 + x1 * r,
    y: h / 2 - y2 * r,
    z: z2,
  };
}

// ── Draw a hospital cross at (cx, cy) on a canvas context ─────────────────
function drawCross(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number,
  armLen: number, alpha: number
) {
  const thick = armLen * 0.40;   // arm thickness = 40% of length
  const rad   = thick * 0.30;   // rounded corners

  ctx.globalAlpha = Math.min(1, alpha);
  ctx.fillStyle   = '#1FA9E0';  // azul

  // Horizontal arm
  ctx.beginPath();
  ctx.roundRect(cx - armLen, cy - thick / 2, armLen * 2, thick, rad);
  ctx.fill();

  // Vertical arm
  ctx.beginPath();
  ctx.roundRect(cx - thick / 2, cy - armLen, thick, armLen * 2, rad);
  ctx.fill();
}

export default function GlobeIccs({ className = '' }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset  = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef   = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current   += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi:   (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup',   handlePointerUp,   { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup',   handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas  = canvasRef.current;
    const overlay = overlayRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globe: any = null;
    let animationId: number;
    let phi = 0;
    const BASE_THETA = 0.28;

    // ── Paint hospital crosses on the overlay canvas ──
    function paintCrosses(currentPhi: number, currentTheta: number) {
      if (!overlay) return;
      const ctx = overlay.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w   = canvas.offsetWidth;
      const h   = canvas.offsetHeight;

      // Keep overlay resolution in sync
      if (overlay.width !== Math.round(w * dpr)) {
        overlay.width  = Math.round(w * dpr);
        overlay.height = Math.round(h * dpr);
      }

      ctx.clearRect(0, 0, overlay.width, overlay.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // ── Clip ALL drawing strictly inside the globe circle ──
      const globeRadius = w / 2 - 2;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, globeRadius, 0, Math.PI * 2);
      ctx.clip();

      MARKERS.forEach(({ location: [lat, lng], size }) => {
        const pt = projectMarker(lat, lng, currentPhi, currentTheta, w, h);
        if (!pt) return;
        // Only draw markers clearly on the front hemisphere (z > 0.08)
        if (pt.z < 0.08) return;
        const armLen = size * w * 0.44;
        drawCross(ctx, pt.x, pt.y, armLen, Math.min(1, pt.z * 2.2));
      });

      ctx.restore();
    }

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      globe = (createGlobe as any)(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: BASE_THETA,
        dark: 0,
        diffuse: 1.4,
        mapSamples: 20000,
        mapBrightness: 9,
        baseColor:    [0.965, 0.953, 0.933], // hueso
        markerColor:  [0.122, 0.663, 0.878], // azul (kept but markers:[] so unused)
        glowColor:    [0.737, 0.886, 0.949], // cielo
        markerElevation: 0.025,
        markers: [],   // ← empty: we render crosses ourselves on the overlay
        arcs:    ARCS,
        arcColor:  [0.055, 0.361, 0.549],   // maritimo
        arcWidth:  0.9,
        arcHeight: 0.32,
        opacity:   0.85,
      });

      function animate() {
        if (!isPausedRef.current) phi += 0.0028;
        const currentPhi   = phi + phiOffsetRef.current   + dragOffset.current.phi;
        const currentTheta = BASE_THETA + thetaOffsetRef.current + dragOffset.current.theta;

        globe.update({ phi: currentPhi, theta: currentTheta });
        paintCrosses(currentPhi, currentTheta);

        animationId = requestAnimationFrame(animate);
      }
      animate();

      setTimeout(() => { if (canvas) canvas.style.opacity = '1'; });
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
      return () => {
        ro.disconnect();
        if (animationId!) cancelAnimationFrame(animationId);
        if (globe) globe.destroy();
      };
    }

    return () => {
      if (animationId!) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <div className={`relative aspect-square w-full select-none ${className}`}>
      {/* COBE WebGL canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: '100%', height: '100%',
          cursor: 'grab', opacity: 0,
          transition: 'opacity 1.2s ease',
          touchAction: 'none',
        }}
      />
      {/* Overlay canvas — hospital cross markers */}
      <canvas
        ref={overlayRef}
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
