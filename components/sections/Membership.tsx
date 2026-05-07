'use client';

// Membership tiers — three pricing plans with feature lists
import AnimatedButton from '@/components/ui/AnimatedButton';
import BlobCard from '@/components/ui/BlobCard';

const CheckIcon = ({ light = false }: { light?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="flex-shrink-0">
    <circle cx="9" cy="9" r="8.5" stroke={light ? '#7FD0EE' : '#1FA9E0'} />
    <path d="M5.5 9L7.5 11L12.5 6.5" stroke={light ? '#7FD0EE' : '#1FA9E0'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tiers = [
  {
    level: 'Nivel 01',
    name: 'Acceso libre',
    price: '0€',
    period: 'para siempre',
    description: 'Para empezar a formar parte del ecosistema iCCS.',
    features: [
      'Perfil profesional verificado',
      'Noticias seleccionadas semanales',
      'Vista previa del catálogo',
      'Boletín editorial mensual',
    ],
    cta: 'Crear cuenta gratis',
    featured: false,
  },
  {
    level: 'Nivel 02 · Profesional',
    name: 'Profesional',
    price: '29€',
    period: '/mes',
    description: 'El acceso completo para tu práctica clínica diaria.',
    badge: 'Recomendado',
    features: [
      'Biblioteca completa sin límites',
      'Cursos certificados con aval',
      'Rutas de aprendizaje curadas',
      'Acceso anticipado a publicaciones',
      'Comunidad y eventos exclusivos',
      'Descargas ilimitadas',
    ],
    cta: 'Únete ahora',
    featured: true,
  },
  {
    level: 'Nivel 03',
    name: 'Institucional',
    price: 'A medida',
    period: '',
    description: 'Para hospitales, laboratorios y sociedades médicas.',
    features: [
      'Licencias múltiples',
      'Panel administrativo',
      'Reportes de uso por usuario',
      'Contenido a medida',
      'Soporte dedicado',
    ],
    cta: 'Solicitar demo',
    featured: false,
  },
];

export default function Membership() {
  return (
    <section
      id="membresia"
      className="py-[140px] px-6"
      style={{ background: 'linear-gradient(180deg, transparent, #ECE7DD)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-azul bg-azul/10 border border-azul/15 px-3.5 py-1.5 rounded-full mb-5">
            03 — Membresía
          </span>
          <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-tinta leading-[1.1]">
            Tres niveles,{' '}
            <em className="italic text-maritimo">un mismo rigor.</em>
          </h2>
          <p className="font-inter text-[17px] text-tinta/60 mt-4 leading-relaxed">
            El acceso que se ajusta a tu práctica profesional. Todos los niveles
            comparten la calidad editorial e independencia que definen iCCS.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {tiers.map((tier, i) => (
            /* Outer relative wrapper so badge can overflow the BlobCard */
            <div
              key={tier.name}
              className="relative"
              style={tier.featured ? { transform: 'scale(1.04)' } : undefined}
            >
              {/* Floating badge — above BlobCard overflow */}
              {tier.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 font-mono text-[11px] uppercase tracking-widest bg-azul text-white px-4 py-1.5 rounded-full whitespace-nowrap">
                  {tier.badge}
                </span>
              )}

              <BlobCard
                outerClassName="rounded-[24px] shadow-sm"
                innerClassName={`rounded-[20px] p-8 ${tier.featured ? '' : ''}`}
                dark={tier.featured}
                duration={4.5 + i * 1.5}
              >
                <span className={`font-mono text-[11px] uppercase tracking-widest ${tier.featured ? 'text-cielo/70' : 'text-tinta/40'}`}>
                  {tier.level}
                </span>

                <h3 className={`font-fraunces text-[26px] font-medium mt-2 ${tier.featured ? 'text-hueso' : 'text-tinta'}`}>
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1.5 mt-4 mb-2">
                  <span className={`font-fraunces font-light ${tier.featured ? 'text-hueso' : 'text-tinta'} ${tier.price === 'A medida' ? 'text-[26px]' : 'text-[40px]'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`font-inter text-[14px] ${tier.featured ? 'text-hueso/55' : 'text-tinta/50'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className={`font-inter text-[14px] leading-relaxed mb-7 ${tier.featured ? 'text-hueso/65' : 'text-tinta/55'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon light={tier.featured} />
                      <span className={`font-inter text-[14px] ${tier.featured ? 'text-hueso/80' : 'text-tinta/70'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <AnimatedButton
                  href="#unirse"
                  variant={tier.featured ? 'blue' : 'outline-featured'}
                  className="w-full text-[15px] py-3.5 rounded-full"
                >
                  {tier.cta}
                </AnimatedButton>
              </BlobCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
