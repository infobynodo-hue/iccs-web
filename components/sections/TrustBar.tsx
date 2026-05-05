'use client';

// Trust bar — partner logos with sparkle ambient effect
import dynamic from 'next/dynamic';

const Sparkles = dynamic(
  () => import('@/components/ui/Sparkles').then((m) => ({ default: m.Sparkles })),
  { ssr: false }
);

const partners = ['iOncoCare', 'U. Nebrija', 'SAOM', 'GECP', 'SEHH', 'SEOM'];

export default function TrustBar() {
  return (
    <section className="relative pt-20 pb-10 px-6 border-t border-[var(--line)] overflow-hidden">
      {/* Sparkles — maritimo, very sparse and slow */}
      <Sparkles
        className="absolute inset-0 w-full h-full pointer-events-none"
        color="#0E5C8C"
        background="transparent"
        size={1.6}
        minSize={0.4}
        density={80}
        speed={0.4}
        opacity={0.45}
        minOpacity={0.08}
        opacitySpeed={1.2}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <p className="font-mono uppercase text-[11px] tracking-widest text-tinta/40 text-center mb-8">
          En colaboración con
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="font-fraunces text-[16px] font-medium text-tinta/40 hover:text-tinta/70 transition-colors whitespace-nowrap cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
