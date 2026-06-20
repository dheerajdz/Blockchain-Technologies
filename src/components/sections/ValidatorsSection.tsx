'use client';

import { motion } from 'framer-motion';

const validatorPaths = [
  {
    title: 'Run a Validator',
    description: 'Stake XCHAIN and participate in consensus while earning rewards for every finalized block.',
    accent: '#00FF66',
  },
  {
    title: 'Build on-chain apps',
    description: 'Deploy low-fee dApps with fast finality and developer-friendly APIs.',
    accent: '#7C3AED',
  },
  {
    title: 'Stake & Delegate',
    description: 'Support network security through delegation and capture long-term yield.',
    accent: '#06B6D4',
  },
];

export default function ValidatorsSection() {
  return (
    <section id="validators" className="relative py-24 bg-[#020205] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00FF66]/10 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl text-center mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#00FF66] font-semibold mb-4">Three ways in</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Pick the role that fits your node.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {validatorPaths.map((path, idx) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-[28px] border border-white/10 bg-[#091215]/95 p-8 shadow-[0_30px_80px_-40px_rgba(0,255,102,0.2)] hover:border-white/20 hover:bg-[#0F1517]/95 transition"
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ backgroundColor: `${path.accent}15` }}
              >
                <span className="text-xl font-bold">→</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{path.description}</p>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00FF66]">Learn more</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
