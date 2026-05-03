'use client';

// Three pillars section — core platform value dimensions
import { useReveal } from '@/lib/hooks/useReveal';

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="9" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path d="M2 22c0-4 3.6-7 8-7h8c4.4 0 8 3 8 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Comunidad médica verificada',
    text: 'Una red profesional con perfiles validados, especialidad e institución, donde reconocerse con pares y construir trayectoria.',
    link: 'Conoce la comunidad →',
    href: '#comunidad',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M3 9H25" stroke="currentColor" strokeWidth="1.75" />
        <path d="M14 4V22" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 14h4M8 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Biblioteca clínica curada',
    text: 'Manuales, compendios, cursos y rutas formativas en oncología y hemato-oncología, construidas por los autores de referencia.',
    link: 'Explora la biblioteca →',
    href: '#biblioteca',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.75" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Conocimiento anticipado',
    text: 'Acceso anticipado a noticias científicas, cobertura de congresos y análisis editoriales de los referentes del sector.',
    link: 'Lee lo último →',
    href: '#conocimiento',
  },
];

export default function Pillars() {
  const ref = useReveal();

  return (
    <section id="pillars" className="py-[120px] px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1280px] mx-auto">
        {/* Section head */}
        <div className="text-center max-w-[680px] mx-auto mb-16 reveal">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-azul bg-azul/10 border border-azul/15 px-3.5 py-1.5 rounded-full mb-5">
            01 — La plataforma
          </span>
          <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-tinta leading-[1.1]">
            Una plataforma para quienes hacen{' '}
            <em className="italic text-maritimo">avanzar la oncología.</em>
          </h2>
          <p className="font-inter text-[17px] text-tinta/60 mt-4 leading-relaxed">
            Tres dimensiones que componen la experiencia iCCS. Comunidad médica
            verificada, biblioteca curada y conocimiento clínico de frontera.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-[20px] p-8 border border-[var(--line)] shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-azul/8 flex items-center justify-center text-azul mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-fraunces text-[22px] font-medium text-tinta leading-snug mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-[15px] text-tinta/60 leading-relaxed mb-6">
                {pillar.text}
              </p>
              <a
                href={pillar.href}
                className="font-inter text-[14px] font-semibold text-azul hover:text-maritimo transition-colors"
              >
                {pillar.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
