'use client';

// Final CTA — closing call to action with radial background decoration
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function FinalCTA() {
  return (
    <section className="relative py-[160px] px-6 overflow-hidden" id="unirse">
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(31,169,224,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[760px] mx-auto text-center">
        <h2
          className="font-fraunces font-light text-tinta leading-[1.05]"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          El conocimiento médico que tu{' '}
          <em className="italic text-maritimo">práctica merece.</em>
        </h2>
        <p className="font-inter text-[19px] text-tinta/60 mt-6 leading-relaxed">
          Únete a la red de profesionales que ya forman parte de iCCS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <AnimatedButton
            href="#"
            variant="primary"
            className="text-[16px] px-8 py-4 rounded-full"
          >
            Únete a iCCS →
          </AnimatedButton>
          <AnimatedButton
            href="#empresas"
            variant="outline"
            className="font-medium text-[16px] px-8 py-4 rounded-full"
          >
            Solicitar demo institucional
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
