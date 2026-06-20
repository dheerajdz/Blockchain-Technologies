'use client';

import { motion } from 'framer-motion';

const roadmapCards = [
  {
    title: '<2s',
    label: 'Block finality',
    description: 'Ultra-fast confirmation for validators and apps.',
  },
  {
    title: '12,482+',
    label: 'Active validators',
    description: 'Global nodes securing transaction history.',
  },
  {
    title: '99.9%',
    label: 'Uptime',
    description: 'Reliable consensus across the live network.',
  },
  {
    title: 'Energy-efficient',
    label: 'Proof-of-stake',
    description: 'Consensus designed to minimize energy use.',
  },
  {
    title: 'Open governance',
    label: 'Community-led upgrades',
    description: 'Protocol changes driven by validator consensus.',
  },
  {
    title: 'Developer-ready',
    label: 'APIs & SDKs',
    description: 'Built for modern blockchain integrations.',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 bg-[#07120E] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.16),_transparent_20%)] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#00FF66] font-semibold mb-4">Future-proof design</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Built so growth never trades away decentralization.</h2>
          <p className="mt-5 text-base text-white/60 leading-relaxed">
            XCHAIN is architected to scale validator participation, minimize fees, and keep the network permissionless at every stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#091815]/95 p-8 shadow-[0_25px_60px_-35px_rgba(0,255,102,0.2)]"
            >
              <div className="text-4xl font-black text-white font-mono">{card.title}</div>
              <div className="mt-3 text-lg font-semibold text-white">{card.label}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
