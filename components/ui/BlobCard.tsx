'use client';

// BlobCard — card wrapper with an animated gradient blob border
// The blob circulates behind a glass inset, peeking through as a living colored border.
// Brand palette: maritimo → azul → cielo

import React from 'react';

interface BlobCardProps {
  children: React.ReactNode;
  /** Classes on the outermost wrapper (border-radius, shadow, hover, etc.) */
  outerClassName?: string;
  /** Classes on the inner glass div (padding, bg override, overflow, etc.) */
  innerClassName?: string;
  /** Dark-mode variant — uses tinta background inside the glass */
  dark?: boolean;
  /** Animation speed in seconds (default 6) */
  duration?: number;
}

export default function BlobCard({
  children,
  outerClassName = '',
  innerClassName = '',
  dark = false,
  duration = 6,
}: BlobCardProps) {
  return (
    <div className={`relative overflow-hidden ${outerClassName}`}>
      {/* ── Animated gradient blob ── */}
      <div
        className="blob-iccs absolute w-[220px] h-[220px] rounded-full z-0 pointer-events-none"
        style={{
          background: dark
            ? 'linear-gradient(135deg, #7FD0EE 0%, #1FA9E0 50%, #0E5C8C 100%)'
            : 'linear-gradient(135deg, #0E5C8C 0%, #1FA9E0 50%, #7FD0EE 100%)',
          filter: 'blur(22px)',
          opacity: dark ? 0.55 : 0.9,
          top: '50%',
          left: '50%',
          animationDuration: `${duration}s`,
        }}
      />

      {/* ── Glass inset — 4 px gap lets the blob border show through ── */}
      <div
        className={`relative m-[4px] z-10 overflow-hidden ${
          dark ? 'bg-[#162333]' : 'bg-white'
        } ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
