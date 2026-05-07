'use client';

// Team section — auto-sliding carousel with overlapping photo + card layout
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { team } from '@/lib/data/team';

const AUTO_INTERVAL = 4500; // ms between auto-advances

const stats = [
  { number: '+1.700', label: 'Profesionales activos' },
  { number: '+20',   label: 'Países alcanzados'     },
  { number: '+15',   label: 'Eventos anuales'       },
  { number: '100%',  label: 'Aval científico'       },
];

export default function Team() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % team.length), []);
  const prev = useCallback(() =>
    setCurrent((i) => (i - 1 + team.length) % team.length), []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const member = team[current];

  return (
    <section id="nosotros" className="bg-tinta text-hueso py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto space-y-20">

        {/* Manifesto */}
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

        {/* Carousel heading */}
        <div className="text-center">
          <h2 className="font-fraunces text-[36px] md:text-[44px] font-light text-hueso leading-[1.1]">
            Profesionales que{' '}
            <em className="italic text-cielo">forjan</em> nuestro rigor.
          </h2>
        </div>

        {/* ── Carousel ── */}
        <div
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Desktop */}
          <div className="hidden md:flex relative items-center">
            {/* Photo */}
            <div className="w-[400px] h-[420px] rounded-[24px] overflow-hidden flex-shrink-0 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={member.photo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={420}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info card — overlaps photo */}
            <div
              className="rounded-[24px] shadow-2xl p-8 ml-[-72px] z-10 flex-1"
              style={{ background: 'rgba(18,40,69,0.96)', backdropFilter: 'blur(12px)', border: '1px solid rgba(246,243,238,0.08)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cielo/60 mb-3 block">
                    {member.tag}
                  </span>
                  <h3 className="font-fraunces text-[28px] font-medium text-hueso leading-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-[14px] text-cielo/70 mb-8">
                    {member.role}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-[2px] bg-hueso/10 rounded-full overflow-hidden mb-6">
                    {!paused && (
                      <motion.div
                        key={`bar-${current}`}
                        className="h-full bg-cielo/60 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: AUTO_INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                  </div>

                  {/* Counter */}
                  <p className="font-mono text-[11px] text-hueso/25">
                    {String(current + 1).padStart(2, '0')} / {String(team.length).padStart(2, '0')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden max-w-sm mx-auto">
            <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={member.photo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center px-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-cielo/60">{member.tag}</span>
                <h3 className="font-fraunces text-[22px] font-medium text-hueso mt-1 mb-1">{member.name}</h3>
                <p className="font-inter text-[13px] text-cielo/70">{member.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            {/* Prev */}
            <button
              onClick={() => { prev(); setPaused(false); }}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ background: 'rgba(246,243,238,0.06)', border: '1px solid rgba(246,243,238,0.12)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="rgba(246,243,238,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {team.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(false); }}
                  aria-label={`Ir al miembro ${i + 1}`}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width:  i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? 'rgba(186,227,238,0.8)' : 'rgba(246,243,238,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => { next(); setPaused(false); }}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ background: 'rgba(246,243,238,0.06)', border: '1px solid rgba(246,243,238,0.12)' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="rgba(246,243,238,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
