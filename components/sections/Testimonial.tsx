'use client';

// Testimonial — professional quote with sparkle particle background
import dynamic from 'next/dynamic';

const Sparkles = dynamic(
  () => import('@/components/ui/Sparkles').then((m) => ({ default: m.Sparkles })),
  { ssr: false }
);

export default function Testimonial() {
  return (
    <section className="relative bg-hueso-2 py-[100px] px-6 overflow-hidden">
      {/* Sparkle layer — cielo particles, subtle density */}
      <Sparkles
        className="absolute inset-0 w-full h-full pointer-events-none"
        color="#1FA9E0"
        background="transparent"
        size={1.8}
        minSize={0.5}
        density={200}
        speed={0.5}
        opacity={0.55}
        minOpacity={0.1}
        opacitySpeed={1.5}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-square rounded-[24px] overflow-hidden bg-gradient-to-br from-maritimo to-azul flex items-end p-8">
            <span className="font-inter text-[13px] text-white/60">
              Foto profesional médico
            </span>
          </div>

          {/* Quote */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-azul bg-azul/10 border border-azul/15 px-3.5 py-1.5 rounded-full">
              Voz médica
            </span>
            <blockquote className="font-fraunces italic text-[22px] md:text-[26px] font-light text-tinta leading-[1.4] mt-7 mb-8">
              &ldquo;En oncología no leer es no estar al día, y no estar al día
              tiene consecuencias. iCCS es donde voy cuando necesito una
              respuesta clínica con respaldo real.&rdquo;
            </blockquote>
            <cite className="not-italic">
              <p className="font-inter font-semibold text-[16px] text-tinta">
                Dra. Marina Saldaña
              </p>
              <p className="font-inter text-[14px] text-tinta/55 mt-1">
                Oncóloga · Hospital Universitario
              </p>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
