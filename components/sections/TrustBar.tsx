// Trust bar — partner logos with placeholder treatment
const partners = ['iOncoCare', 'U. Nebrija', 'SAOM', 'GECP', 'SEHH', 'SEOM'];

export default function TrustBar() {
  return (
    <section className="pt-20 pb-10 px-6 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto">
        <p className="font-mono uppercase text-[11px] tracking-widest text-tinta/40 text-center mb-8">
          En colaboración con
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="font-fraunces text-[16px] font-medium text-tinta/40 hover:text-tinta/60 transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
