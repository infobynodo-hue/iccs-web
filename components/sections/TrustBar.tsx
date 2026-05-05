'use client';

// Trust bar — partner logos scrolling marquee with sparkle ambient effect
import dynamic from 'next/dynamic';

const Sparkles = dynamic(
  () => import('@/components/ui/Sparkles').then((m) => ({ default: m.Sparkles })),
  { ssr: false }
);

const partners = ['iOncoCare', 'U. Nebrija', 'SAOM', 'GECP', 'SEHH', 'SEOM'];

// Duplicamos 4 veces para que el bucle sea perfectamente continuo
const track = [...partners, ...partners, ...partners, ...partners];

export default function TrustBar() {
  return (
    <section className="relative pt-20 pb-12 border-t border-[var(--line)] overflow-hidden">
      {/* Sparkles — maritimo, moving particles */}
      <Sparkles
        className="absolute inset-0 w-full h-full pointer-events-none"
        color="#0E5C8C"
        background="transparent"
        size={2}
        minSize={0.6}
        density={120}
        speed={1.2}
        minSpeed={0.4}
        opacity={0.5}
        minOpacity={0.1}
        opacitySpeed={1.5}
      />

      <div className="relative z-10">
        <p className="font-mono uppercase text-[11px] tracking-widest text-tinta/40 text-center mb-10">
          En colaboración con
        </p>

        {/* Marquee wrapper — masks edges with fade */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="flex marquee-track gap-0">
            {track.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
              >
                {/* Dot separator before each item */}
                <span className="w-1.5 h-1.5 rounded-full bg-maritimo/25 mr-10 md:mr-14 flex-shrink-0" />
                <span className="font-fraunces text-[17px] font-medium text-tinta/40 hover:text-tinta/70 transition-colors whitespace-nowrap cursor-default select-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
