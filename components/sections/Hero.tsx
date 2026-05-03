'use client';

// Hero section — brand statement, CTAs, and three decorative content cards
import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('visible'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="reveal relative overflow-hidden pt-[180px] pb-24 px-6"
    >
      {/* Dot pattern background */}
      <div
        className="dot-pattern absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Announcement pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 bg-azul/10 border border-azul/20 rounded-full px-4 py-2">
            <span
              className="dot-pulse w-2 h-2 rounded-full bg-azul flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-mono text-[12px] text-maritimo font-medium tracking-wide">
              Nueva plataforma · Acceso anticipado abierto
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-fraunces text-center leading-[0.98] font-light text-tinta"
          style={{ fontSize: 'clamp(48px, 7.5vw, 110px)' }}
        >
          Cuidar también es{' '}
          <em className="not-italic italic text-maritimo">comunicar.</em>
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-[22px] text-center text-tinta/65 mt-7 max-w-[720px] mx-auto leading-relaxed">
          La plataforma de conocimiento médico para profesionales que
          diagnostican, investigan, deciden y enseñan en oncología.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#unirse"
            className="inline-flex items-center gap-2.5 font-inter font-semibold text-[15px] bg-tinta text-hueso px-7 py-3.5 rounded-full hover:bg-tinta-2 transition-colors"
          >
            Únete a iCCS
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#pillars"
            className="inline-flex items-center gap-2 font-inter font-medium text-[15px] border border-tinta/25 text-tinta px-7 py-3.5 rounded-full hover:border-tinta/50 hover:bg-tinta/4 transition-colors"
          >
            Conoce la plataforma
          </a>
        </div>

        {/* Hero cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 items-end" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {/* Card 1 */}
          <div
            className="bg-white rounded-[20px] p-6 shadow-md border border-[var(--line)]"
            style={{
              transform: 'rotate(-2deg) translateY(12px)',
              background: 'linear-gradient(135deg, #fff 0%, #f8f6f2 100%)',
            }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-tinta/45 font-medium">
              Manual
            </span>
            <h4 className="font-fraunces text-[19px] font-semibold text-tinta mt-2 leading-snug">
              Cardio-Oncología en pacientes con cáncer
            </h4>
            <p className="font-inter text-[14px] text-tinta/60 mt-2 leading-relaxed">
              Identificar, prevenir y tratar la cardiotoxicidad oncológica.
            </p>
            <p className="font-mono text-[11px] text-tinta/40 mt-4 tracking-wide">
              Dr. A. Huñis · 2026
            </p>
          </div>

          {/* Card 2 — featured, center */}
          <div
            className="bg-tinta rounded-[20px] p-7 shadow-xl text-hueso"
            style={{ transform: 'scale(1.05)' }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-cielo font-medium">
              Plataforma
            </span>
            <h4 className="font-fraunces text-[22px] font-semibold text-hueso mt-2 leading-snug">
              +1.700 profesionales ya forman parte
            </h4>
            <p className="font-inter text-[14px] text-hueso/65 mt-3 leading-relaxed">
              Acceso anticipado a manuales, cursos certificados y comunidad
              médica internacional.
            </p>
            <p className="font-mono text-[11px] text-cielo/70 mt-5 tracking-wide">
              20 países · 5 idiomas
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-[20px] p-6 shadow-md border border-[var(--line)]"
            style={{
              transform: 'rotate(2deg) translateY(12px)',
              background: 'linear-gradient(135deg, #fff 0%, #e8f5fb 100%)',
            }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-tinta/45 font-medium">
              Curso
            </span>
            <h4 className="font-fraunces text-[19px] font-semibold text-tinta mt-2 leading-snug">
              Medical Science Liaison Curso Integral
            </h4>
            <p className="font-inter text-[14px] text-tinta/60 mt-2 leading-relaxed">
              12 módulos certificados con aval científico.
            </p>
            <p className="font-mono text-[11px] text-tinta/40 mt-4 tracking-wide">
              Certificado · Online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
