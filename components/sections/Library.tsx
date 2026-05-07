'use client';

// Library section — resource catalog cards with cover visuals
import { resources } from '@/lib/data/resources';
import BlobCard from '@/components/ui/BlobCard';

const tagColorMap = {
  blue: 'bg-azul/15 text-maritimo',
  green: 'bg-emerald-100 text-emerald-700',
  purple: 'bg-purple-100 text-purple-700',
};

export default function Library() {
  return (
    <section id="biblioteca" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-[560px]">
            <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-azul bg-azul/10 border border-azul/15 px-3.5 py-1.5 rounded-full mb-5">
              02 — Biblioteca
            </span>
            <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-tinta leading-[1.1]">
              Conocimiento que{' '}
              <em className="italic text-maritimo">se navega</em>, no se compra
              suelto.
            </h2>
            <p className="font-inter text-[17px] text-tinta/60 mt-4 leading-relaxed">
              Manuales, compendios, cursos y rutas formativas construidas por
              referentes en oncología y hemato-oncología.
            </p>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button aria-label="Anterior" className="w-11 h-11 rounded-full border border-tinta/20 flex items-center justify-center text-tinta/60 hover:border-tinta/40 hover:text-tinta hover:bg-tinta/4 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button aria-label="Siguiente" className="w-11 h-11 rounded-full border border-tinta/20 flex items-center justify-center text-tinta/60 hover:border-tinta/40 hover:text-tinta hover:bg-tinta/4 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Resource cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource, i) => (
            <BlobCard
              key={resource.title}
              outerClassName="card-hover rounded-[20px] shadow-sm"
              innerClassName="rounded-[16px]"
              duration={5 + i * 1.2}
            >
              {/* Cover */}
              <div className={`relative aspect-[3/4] bg-gradient-to-b ${resource.gradient} flex items-end`}>
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
                  aria-hidden="true"
                />
                <h4 className="relative z-10 font-fraunces text-[20px] font-medium text-white leading-tight p-5">
                  {resource.coverTitle}
                </h4>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className={`font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full ${tagColorMap[resource.tagColor]}`}>
                    {resource.type}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full ${tagColorMap[resource.tagColor]}`}>
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-fraunces text-[17px] font-medium text-tinta leading-snug mb-1">
                  {resource.title}
                </h3>
                <p className="font-inter text-[13px] text-tinta/50 mb-4">
                  {resource.author}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--line)]">
                  <div>
                    <span className="font-inter text-[15px] font-semibold text-tinta">{resource.price}</span>
                    <span className="font-mono text-[11px] text-tinta/40 ml-2">{resource.pages}</span>
                  </div>
                  <button
                    aria-label={`Ver ${resource.title}`}
                    className="w-8 h-8 rounded-full border border-tinta/15 flex items-center justify-center text-tinta/50 hover:border-azul hover:text-azul hover:bg-azul/6 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </BlobCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="#biblioteca" className="font-inter font-semibold text-[15px] text-maritimo hover:text-azul transition-colors">
            Ver biblioteca completa →
          </a>
        </div>
      </div>
    </section>
  );
}
