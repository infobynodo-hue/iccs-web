'use client';

// Fixed navigation header with scroll-aware transparency and mobile responsive layout
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-hueso/90 backdrop-blur-xl border-b border-[var(--line)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/iccs-logo.png"
            alt="iCCS"
            height={38}
            width={120}
            className="h-[38px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          <a
            href="#membresia"
            className="font-inter text-[14px] font-medium text-tinta/75 hover:text-tinta transition-colors"
          >
            Membresía
          </a>
          <a
            href="#biblioteca"
            className="font-inter text-[14px] font-medium text-tinta/75 hover:text-tinta transition-colors"
          >
            Biblioteca
          </a>
          <a
            href="#conocimiento"
            className="font-inter text-[14px] font-medium text-tinta/75 hover:text-tinta transition-colors"
          >
            Conocimiento
          </a>
          <a
            href="#nosotros"
            className="font-inter text-[14px] font-medium text-tinta/75 hover:text-tinta transition-colors"
          >
            Quiénes somos
          </a>
          <a
            href="#empresas"
            className="font-inter text-[14px] font-semibold text-maritimo hover:text-maritimo/80 transition-colors"
          >
            Para empresas
          </a>

          {/* Divider */}
          <span className="w-px h-5 bg-tinta/15" aria-hidden="true" />

          <a
            href="#acceder"
            className="font-inter text-[14px] font-medium text-tinta/75 hover:text-tinta transition-colors"
          >
            Acceder
          </a>
          <a
            href="#unirse"
            className="font-inter text-[14px] font-semibold bg-tinta text-hueso px-5 py-2.5 rounded-full hover:bg-tinta-2 transition-colors"
          >
            Únete a iCCS
          </a>
        </nav>

        {/* Mobile: logo + CTA only */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#unirse"
            className="font-inter text-[13px] font-semibold bg-tinta text-hueso px-4 py-2 rounded-full"
          >
            Únete
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-tinta/8 transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="#0B2034" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H17" stroke="#0B2034" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M3 10H17" stroke="#0B2034" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M3 14H17" stroke="#0B2034" strokeWidth="1.75" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-hueso/98 backdrop-blur-xl border-b border-[var(--line)] px-6 pb-6">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Menú móvil">
            {[
              { href: '#membresia', label: 'Membresía' },
              { href: '#biblioteca', label: 'Biblioteca' },
              { href: '#conocimiento', label: 'Conocimiento' },
              { href: '#nosotros', label: 'Quiénes somos' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-inter text-[15px] font-medium text-tinta/80 hover:text-tinta border-b border-[var(--line)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#empresas"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-inter text-[15px] font-semibold text-maritimo border-b border-[var(--line)]"
            >
              Para empresas
            </a>
            <a
              href="#acceder"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-inter text-[15px] font-medium text-tinta/80"
            >
              Acceder
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
