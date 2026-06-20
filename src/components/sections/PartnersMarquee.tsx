'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Ethereum', symbol: 'Ξ' },
  { name: 'XDC Network', symbol: '✕' },
  { name: 'Solana', symbol: '◎' },
  { name: 'Bitcoin', symbol: '₿' },
  { name: 'Polygon', symbol: '⬡' },
  { name: 'Chainlink', symbol: '⬢' },
  { name: 'IPFS', symbol: '⚡' },
  { name: 'Cosmos', symbol: '⚛' },
  { name: 'Avalanche', symbol: '▲' },
  { name: 'Arbitrum', symbol: '⧫' },
];

export default function PartnersMarquee() {
  // Double the array to make a continuous seamless marquee scroll
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="relative py-10 bg-[#020205] overflow-hidden border-y border-white/5 select-none">
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF66]/2 to-transparent pointer-events-none" />

      {/* Fade Gradients at Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020205] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020205] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        {/* Scrolling list */}
        <div className="flex items-center gap-16 pr-16 animate-marquee">
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 text-white/30 hover:text-white/80 transition-colors duration-300 cursor-default group"
            >
              <span className="text-xl font-bold font-mono text-[#00FF66]/60 group-hover:text-[#00FF66] transition-colors duration-300">
                {partner.symbol}
              </span>
              <span className="text-sm font-extrabold uppercase tracking-[0.25em] font-sans">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
