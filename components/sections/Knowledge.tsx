'use client';

// Knowledge section — featured article and secondary article stack
import { articles } from '@/lib/data/articles';
import BlobCard from '@/components/ui/BlobCard';

export default function Knowledge() {
  const featured = articles.find((a) => a.featured)!;
  const secondary = articles.filter((a) => !a.featured);

  return (
    <section id="conocimiento" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-azul bg-azul/10 border border-azul/15 px-3.5 py-1.5 rounded-full mb-5">
            05 — Conocimiento
          </span>
          <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-tinta leading-[1.1]">
            Lo último,{' '}
            <em className="italic text-maritimo">antes que en otro lugar.</em>
          </h2>
          <p className="font-inter text-[17px] text-tinta/60 mt-4 leading-relaxed">
            Análisis editoriales, cobertura de congresos y publicaciones
            revisadas por los referentes de iCCS.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Featured article */}
          <BlobCard
            outerClassName="card-hover rounded-[24px] shadow-sm"
            innerClassName="rounded-[20px]"
            duration={7}
          >
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-maritimo to-tinta flex items-end p-6">
              <span className="font-inter text-[13px] text-white/50">Imagen artículo destacado</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wide bg-azul/10 text-maritimo px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="font-mono text-[12px] text-tinta/40">{featured.date}</span>
              </div>
              <h3 className="font-fraunces text-[28px] md:text-[32px] font-medium text-tinta leading-[1.2] mb-4">
                {featured.title}
              </h3>
              <p className="font-inter text-[15px] text-tinta/60 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <a href="#" className="font-inter font-semibold text-[14px] text-maritimo hover:text-azul transition-colors">
                Leer artículo completo →
              </a>
            </div>
          </BlobCard>

          {/* Secondary articles */}
          <div className="flex flex-col gap-5">
            {secondary.map((article, i) => (
              <BlobCard
                key={article.id}
                outerClassName="rounded-[20px] shadow-sm hover:translate-x-1 transition-transform"
                innerClassName="rounded-[16px] p-6 cursor-pointer"
                duration={4.5 + i}
              >
                <a href="#" className="block">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wide bg-azul/8 text-maritimo px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px] text-tinta/40">{article.date}</span>
                  </div>
                  <h4 className="font-fraunces text-[18px] font-medium text-tinta leading-snug mb-2">
                    {article.title}
                  </h4>
                  <p className="font-inter text-[13px] text-tinta/55 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </a>
              </BlobCard>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <a href="#" className="font-inter font-semibold text-[15px] text-maritimo hover:text-azul transition-colors">
            Ver todos los artículos →
          </a>
        </div>
      </div>
    </section>
  );
}
