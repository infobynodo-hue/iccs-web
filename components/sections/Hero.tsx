'use client';

// Hero section — split layout: brand statement + CTAs on the left, interactive globe on the right
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import AnimatedButton from '@/components/ui/AnimatedButton';

// Load globe only on client (canvas + WebGL)
const GlobeIccs = dynamic(() => import('@/components/ui/GlobeIccs'), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full rounded-full bg-gradient-to-br from-cielo-soft to-azul/10 animate-pulse" />
  ),
});

const stats = [
  { value: '+1.700', label: 'Profesionales' },
  { value: '+20', label: 'Países' },
  { value: '5', label: 'Idiomas' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('visible'), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="reveal relative overflow-hidden pt-[120px] pb-20 px-6"
    >
      {/* Dot pattern */}
      <div className="dot-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="flex flex-col items-start">
            {/* Announcement pill */}
            <div className="inline-flex items-center gap-2.5 bg-azul/10 border border-azul/20 rounded-full px-4 py-2 mb-8">
              <span className="dot-pulse w-2 h-2 rounded-full bg-azul flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[12px] text-maritimo font-medium tracking-wide">
                Nueva plataforma · Acceso anticipado abierto
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-fraunces leading-[0.97] font-light text-tinta"
              style={{ fontSize: 'clamp(44px, 5.5vw, 88px)' }}
            >
              Cuidar también es{' '}
              <em className="not-italic italic text-maritimo">comunicar.</em>
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-[18px] md:text-[20px] text-tinta/65 mt-6 leading-relaxed max-w-[520px]">
              La plataforma de conocimiento médico para profesionales que
              diagnostican, investigan, deciden y enseñan en oncología.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-9">
              <AnimatedButton
                href="#unirse"
                variant="primary"
                className="gap-2.5 text-[15px] px-7 py-3.5 rounded-full"
              >
                Únete a iCCS
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </AnimatedButton>
              <AnimatedButton
                href="#pillars"
                variant="outline"
                className="gap-2 text-[15px] px-7 py-3.5 rounded-full font-medium"
              >
                Conoce la plataforma
              </AnimatedButton>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-tinta/10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div>
                    <div className="font-fraunces text-[26px] font-light text-tinta leading-none">
                      <em className="not-italic italic text-maritimo">{stat.value}</em>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-tinta/45 mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <span className="w-px h-8 bg-tinta/10" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: globe ── */}
          <div className="relative flex items-center justify-center">
            {/* Soft glow behind globe */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(31,169,224,0.07) 0%, transparent 70%)',
              }}
            />
            <div className="w-full max-w-[560px] mx-auto">
              <GlobeIccs />
            </div>
            {/* Globe caption */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-tinta/35">
                Red global iCCS · Arrastra para explorar
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
