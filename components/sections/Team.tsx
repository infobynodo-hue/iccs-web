'use client';

// Team section — manifesto quote, stats, and member grid on dark background
import Image from 'next/image';
import { team } from '@/lib/data/team';
import BlobCard from '@/components/ui/BlobCard';

const stats = [
  { number: '+1.700', label: 'Profesionales activos' },
  { number: '+20', label: 'Países alcanzados' },
  { number: '+15', label: 'Eventos anuales' },
  { number: '100%', label: 'Aval científico' },
];

// Gradient per team member card
const gradients = [
  'from-maritimo to-tinta',
  'from-azul to-maritimo',
  'from-tinta-2 to-tinta',
  'from-[#2F8E7C] to-maritimo',
  'from-[#7C3AED] to-maritimo',
  'from-azul-light to-azul',
];

export default function Team() {
  return (
    <section id="nosotros" className="bg-tinta text-hueso py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto space-y-20">
        {/* Manifesto quote */}
        <div className="text-center max-w-[760px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-cielo/60 border border-cielo/20 px-3.5 py-1.5 rounded-full mb-8">
            04 — Quiénes somos
          </span>
          <blockquote className="font-fraunces italic text-[28px] md:text-[36px] font-light text-hueso leading-[1.3]">
            &ldquo;Hacemos comunicación médica con el rigor de un comité
            científico y el cuidado de una{' '}
            <em className="text-cielo">sala de espera.</em>&rdquo;
          </blockquote>
          <cite className="not-italic font-mono text-[12px] uppercase tracking-widest text-cielo/50 mt-6 block">
            iCCS · Manifiesto
          </cite>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 py-16"
          style={{ borderTop: '1px solid rgba(246,243,238,0.1)', borderBottom: '1px solid rgba(246,243,238,0.1)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <div className="font-fraunces font-light text-[44px] md:text-[56px] text-hueso leading-none">
                <em className="not-italic italic text-cielo">{stat.number}</em>
              </div>
              <div className="font-mono uppercase text-[11px] tracking-widest text-cielo/60 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team members */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-hueso leading-[1.1]">
              Profesionales que{' '}
              <em className="italic text-cielo">forjan</em> nuestro rigor.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <BlobCard
                key={member.name}
                outerClassName="card-hover rounded-[20px]"
                innerClassName="rounded-[16px]"
                dark={true}
                duration={5 + i * 1.2}
              >
                {/* Photo */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162333]/60 via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="p-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-cielo/60">
                    {member.tag}
                  </span>
                  <h3 className="font-fraunces text-[19px] font-medium text-hueso mt-1">
                    {member.name}
                  </h3>
                  <p className="font-inter text-[13px] text-cielo/70 mt-0.5">
                    {member.role}
                  </p>
                </div>
              </BlobCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
