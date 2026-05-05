'use client';

// B2B banner — enterprise services pitch with service pills
import Image from 'next/image';
import AnimatedButton from '@/components/ui/AnimatedButton';

const services = [
  'Editorial científica',
  'Ensayos clínicos',
  'Eventos',
  'Marketing farma',
  'Desarrollo medicamentos',
];

export default function B2BBanner() {
  return (
    <section id="empresas" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[32px] px-10 md:px-20 py-16 md:py-20"
          style={{ background: 'linear-gradient(135deg, #0B2034 0%, #0E5C8C 100%)' }}
        >
          {/* Decorative radial gradient */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(127,208,238,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            {/* Content */}
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cielo/70 mb-5 block">
                06 — Para empresas
              </span>
              <h2 className="font-fraunces text-[36px] md:text-[48px] font-light text-hueso leading-[1.1] mb-5">
                Servicios estratégicos para quienes{' '}
                <em className="italic text-cielo">desarrollan ciencia.</em>
              </h2>
              <p className="font-inter text-[17px] text-cielo/70 leading-relaxed mb-8 max-w-[520px]">
                Editorial científica, ensayos clínicos, eventos médicos y
                consultoría especializada para laboratorios, sociedades médicas e
                instituciones de investigación.
              </p>

              {/* Service pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {services.map((service) => (
                  <span
                    key={service}
                    className="font-inter text-[13px] font-medium text-hueso border border-hueso/20 px-4 py-2 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <AnimatedButton
                href="#"
                variant="blue"
                className="gap-2.5 text-[15px] px-7 py-3.5 rounded-full"
              >
                Conoce nuestros servicios B2B →
              </AnimatedButton>
            </div>

            {/* Logo visual */}
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/iccs-logo.png"
                alt="iCCS"
                width={200}
                height={64}
                className="w-[200px] h-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
