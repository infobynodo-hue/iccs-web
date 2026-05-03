// Testimonial — professional quote with image placeholder
export default function Testimonial() {
  return (
    <section className="bg-hueso-2 py-[100px] px-6">
      <div className="max-w-[1100px] mx-auto">
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
