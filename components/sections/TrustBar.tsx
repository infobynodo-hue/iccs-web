'use client';

// Trust bar — partner logos scrolling marquee with sparkle ambient effect
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Sparkles = dynamic(
  () => import('@/components/ui/Sparkles').then((m) => ({ default: m.Sparkles })),
  { ssr: false }
);

const partners = [
  { name: 'Geistek Pharmaceuticals', src: '/logos/geistek.png' },
  { name: 'Red Pet Iberia',      src: '/logos/redpet.png'     },
  { name: 'TribeMD',             src: '/logos/tribemd.png'    },
  { name: 'Med.IQ',              src: '/logos/mediq.png'      },
  { name: 'Avalnet',             src: '/logos/avalnet.png'    },
  { name: 'NetMD',               src: '/logos/netmd.png'      },
  { name: 'Atribus',             src: '/logos/atribus.png'    },
  { name: 'ASAP',                src: '/logos/asap.png'       },
  { name: 'SAOM',                src: '/logos/saom.png'       },
];

// Duplicamos 3 veces para que el bucle sea perfectamente continuo
const track = [...partners, ...partners, ...partners];

export default function TrustBar() {
  return (
    <section className="relative pt-20 pb-12 border-t border-[var(--line)] overflow-hidden">
      {/* Sparkles — maritimo, moving particles */}
      <Sparkles
        className="absolute inset-0 w-full h-full pointer-events-none"
        color="#0E5C8C"
        background="transparent"
        size={2}
        minSize={0.6}
        density={120}
        speed={1.2}
        minSpeed={0.4}
        opacity={0.5}
        minOpacity={0.1}
        opacitySpeed={1.5}
      />

      <div className="relative z-10">
        <p className="font-mono uppercase text-[11px] tracking-widest text-tinta/40 text-center mb-10">
          En colaboración con
        </p>

        {/* Marquee wrapper — masks edges with fade */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="flex items-center marquee-track gap-0">
            {track.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-10 md:gap-14 px-10 md:px-14"
              >
                {/* Dot separator */}
                <span className="w-1 h-1 rounded-full bg-maritimo/20 flex-shrink-0" />
                {/* Logo image */}
                <div className="flex items-center justify-center h-14">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={180}
                    height={56}
                    className="object-contain h-full w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
