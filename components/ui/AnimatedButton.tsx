'use client';

// AnimatedButton — CTA button with a light that travels around the border
import { motion } from 'motion/react';

type Variant = 'primary' | 'outline' | 'blue' | 'outline-light' | 'outline-featured';

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  radius?: number;
  duration?: number;
}

const variantStyles: Record<Variant, string> = {
  primary:         'bg-tinta text-hueso hover:bg-tinta-2',
  outline:         'border border-tinta/25 text-tinta hover:border-tinta/50 hover:bg-tinta/4',
  blue:            'bg-azul text-white hover:bg-azul-light',
  'outline-light': 'border border-hueso/20 text-hueso hover:border-hueso/40',
  'outline-featured': 'border border-tinta/20 text-tinta hover:border-tinta/40 hover:bg-tinta/4',
};

// Color of the travelling light per variant
const lightColor: Record<Variant, string> = {
  primary:            '#1FA9E0',  // azul
  outline:            '#0E5C8C',  // maritimo
  blue:               '#7FD0EE',  // cielo
  'outline-light':    '#7FD0EE',  // cielo
  'outline-featured': '#1FA9E0',  // azul
};

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  radius = 999,
  duration = 4,
}: AnimatedButtonProps) {
  const baseClass = `relative inline-flex items-center justify-center font-inter font-semibold transition-colors ${variantStyles[variant]} ${className}`;
  const light = lightColor[variant];
  const size = 22;

  const border = (
    <div
      className="-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent"
      style={{
        // Mask trick: only the border strip is visible
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        maskImage:
          'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        WebkitMaskClip: 'padding-box, border-box',
        WebkitMaskComposite: 'destination-in',
        WebkitMaskImage:
          'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
      }}
    >
      <motion.div
        className="absolute aspect-square"
        style={{
          width: size,
          background: `radial-gradient(circle, ${light} 0%, transparent 70%)`,
          offsetPath: `rect(0 auto auto 0 round ${radius}px)`,
        }}
        animate={{ offsetDistance: ['0%', '100%'] }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {border}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {border}
      {children}
    </button>
  );
}
