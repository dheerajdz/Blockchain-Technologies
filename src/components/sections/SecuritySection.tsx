'use client';

import { motion } from 'framer-motion';

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-24 bg-[#07120E] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,102,0.18),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.18),_transparent_30%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#00FF66]/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#00FF66] font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]" />
              Security-first network
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              No single point of failure.
            </h2>
            <p className="max-w-lg text-white/60 leading-relaxed text-base sm:text-lg">
              Every block is finalized by a diverse validator set. XCHAIN is designed so that consensus is controlled by the network, not a centralized operator.
            </p>
            <a
              href="#validators"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#00FF66] text-black text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,255,102,0.18)] hover:bg-[#00FF66]/90 transition"
            >
              Become a Validator
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-[32px] border border-white/10 bg-[#090E0B]/95 p-8 shadow-[0_30px_80px_-35px_rgba(0,255,102,0.3)]">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07120E] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF66]/20 via-transparent to-[#7C3AED]/10 pointer-events-none" />
                <div className="relative">
                  <div className="mb-5 text-sm text-white/40 uppercase tracking-[0.3em]">Network mesh</div>
                  <div className="grid grid-cols-3 gap-4">
                    {['Validators', 'Finality', 'Slashing'].map((item) => (
                      <div key={item} className="rounded-3xl bg-white/5 p-4 text-center">
                        <div className="text-2xl font-bold text-white">{item === 'Validators' ? '12,482' : item === 'Finality' ? '<2s' : 'Zero'}</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">{item}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-white/10 bg-[#08160F]/95 p-5">
                    <div className="flex items-center justify-between text-xs uppercase text-white/40">
                      <span>Consensus topology</span>
                      <span>Live</span>
                    </div>
                    <div className="mt-6 grid gap-4">
                      {['Beacon chain', 'Open validator set', 'Stake-based finality'].map((item, idx) => (
                        <div key={idx} className="rounded-2xl bg-[#0A1A12]/80 p-4">
                          <div className="text-sm text-white/70">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
