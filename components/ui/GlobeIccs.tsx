'use client';

// Interactive COBE globe showing the iCCS global medical network.
// Markers = oncology hubs / hospitals. Arcs = knowledge connections between them.
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
  { from: [40.42, -3.70] as [number, number], to: [-34.60, -58.38] as [number, number] }, // Madrid → Buenos Aires
  { from: [40.42, -3.70] as [number, number], to: [19.43,  -99.13] as [number, number] }, // Madrid → México
  { from: [40.42, -3.70] as [number, number], to: [4.71,   -74.07] as [number, number] }, // Madrid → Bogotá
  { from: [40.42, -3.70] as [number, number], to: [51.51,   -0.13] as [number, number] }, // Madrid → Londres
  { from: [51.51, -0.13] as [number, number], to: [48.86,    2.35] as [number, number] }, // Londres → París
  { from: [48.86,  2.35] as [number, number], to: [-23.55, -46.63] as [number, number] }, // París → São Paulo
  { from: [40.71, -74.01] as [number, number], to: [51.51,  -0.13] as [number, number] }, // Nueva York → Londres
  { from: [25.76, -80.19] as [number, number], to: [-34.60, -58.38] as [number, number]}, // Miami → Buenos Aires
  { from: [-23.55, -46.63] as [number, number], to: [-33.46, -70.65] as [number, number]},// São Paulo → Santiago
  { from: [4.71,  -74.07] as [number, number], to: [-12.04, -77.03] as [number, number] },// Bogotá → Lima
  { from: [51.51,  -0.13] as [number, number], to: [1.36,  103.99]  as [number, number] },// Londres → Singapur
  { from: [48.86,   2.35] as [number, number], to: [35.55, 139.78]  as [number, number] },// París → Tokio
];

export default function GlobeIccs({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
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
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globe: any = null;
    let animationId: number;
    let phi = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      globe = (createGlobe as any)(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.28,
        dark: 0,
        diffuse: 1.4,
        mapSamples: 20000,
        mapBrightness: 9,
        // iCCS palette
        baseColor: [0.965, 0.953, 0.933],   // hueso
        markerColor: [0.122, 0.663, 0.878], // azul #1FA9E0
        glowColor: [0.737, 0.886, 0.949],   // cielo #7FD0EE
        markerElevation: 0.025,
        markers: MARKERS,
        // Arcs — knowledge connections
        arcs: ARCS,
        arcColor: [0.055, 0.361, 0.549],    // maritimo #0E5C8C
        arcWidth: 0.9,
        arcHeight: 0.32,
        opacity: 0.85,
      });

      function animate() {
        if (!isPausedRef.current) phi += 0.0028;
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.28 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      // Fade in after first frame
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
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          opacity: 0,
          transition: 'opacity 1.2s ease',
          touchAction: 'none',
        }}
      />
    </div>
  );
}
