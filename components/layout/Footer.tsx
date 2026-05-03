// Site footer with brand column, navigation links, and legal info
import Image from 'next/image';

const footerLinks = {
  plataforma: ['Membresía', 'Biblioteca', 'Conocimiento', 'Comunidad', 'Eventos'],
  empresas: [
    'Editorial científica',
    'Ensayos clínicos',
    'Eventos médicos',
    'Marketing farma',
    'Solicitar propuesta',
  ],
  iccs: ['Quiénes somos', 'Equipo', 'Alianzas', 'Contacto', 'Trabaja con nosotros'],
  legal: ['Aviso legal', 'Privacidad', 'Cookies', 'Términos'],
};

export default function Footer() {
  return (
    <footer className="bg-tinta text-hueso">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-hueso/10">
          {/* Brand column */}
          <div className="space-y-5">
            <Image
              src="/iccs-logo.png"
              alt="iCCS"
              height={48}
              width={150}
              className="h-[48px] w-auto object-contain brightness-0 invert"
            />
            <p className="font-fraunces italic text-cielo text-[17px] leading-snug">
              Cuidar también es comunicar.
            </p>
            <p className="font-inter text-[13px] text-hueso/55 leading-relaxed max-w-[260px]">
              International Cancer Care Society. Comunicación médica con rigor y
              cercanía, en oncología y hemato-oncología.
            </p>
          </div>

          {/* Plataforma */}
          <div>
            <h3 className="font-mono uppercase text-[11px] tracking-widest text-cielo/70 mb-5">
              Plataforma
            </h3>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-[14px] text-hueso/65 hover:text-hueso transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Para empresas */}
          <div>
            <h3 className="font-mono uppercase text-[11px] tracking-widest text-cielo/70 mb-5">
              Para empresas
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresas.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-[14px] text-hueso/65 hover:text-hueso transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* iCCS */}
          <div>
            <h3 className="font-mono uppercase text-[11px] tracking-widest text-cielo/70 mb-5">
              iCCS
            </h3>
            <ul className="space-y-3">
              {footerLinks.iccs.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-[14px] text-hueso/65 hover:text-hueso transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono uppercase text-[11px] tracking-widest text-cielo/70 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-[14px] text-hueso/65 hover:text-hueso transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-[13px] text-hueso/45">
            © 2026 International Cancer Care Society ·{' '}
            <a href="https://iccs.health" className="hover:text-hueso/70 transition-colors underline-offset-2 hover:underline">
              iccs.health
            </a>
          </p>
          {/* Language selector */}
          <div className="flex items-center gap-1">
            {['ES', 'EN', 'PT'].map((lang, i) => (
              <span key={lang} className="flex items-center gap-1">
                {i > 0 && <span className="text-hueso/25 text-[12px]">/</span>}
                <button className={`font-mono text-[12px] tracking-wider px-1.5 py-0.5 rounded transition-colors ${
                  i === 0 ? 'text-hueso font-medium' : 'text-hueso/40 hover:text-hueso/70'
                }`}>
                  {lang}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
