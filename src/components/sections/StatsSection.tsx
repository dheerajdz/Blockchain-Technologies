'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Value Locked (TVL)', value: '$1,429,820,105', description: 'Locked across client nodes', stroke: '#00FF66', glow: 'shadow-[0_0_20px_rgba(0,255,102,0.2)]' },
  { label: 'Average Block Time', value: '2.01 seconds', description: 'Consensus finality speed', stroke: '#7C3AED', glow: 'shadow-[0_0_20px_rgba(124,58,237,0.2)]' },
  { label: 'Total Transactions', value: '285.42M +', description: 'Aggregated volume metrics', stroke: '#EC4899', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.2)]' },
  { label: 'Distributed Validators', value: '9,998 Nodes', description: 'Secure global redundancy', stroke: '#06B6D4', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-28 bg-[#020205] noise-overlay border-b border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-[#00FF66]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-[#00FF66] font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
            Live Diagnostics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">
            Ecosystem in <span className="gradient-text">Numbers</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#09090F]/90 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-56 relative group card-hover"
            >
              {/* Colored tag highlight */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                style={{ backgroundColor: stat.stroke }}
              />

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/40 uppercase font-extrabold tracking-wider">{stat.label}</span>
                <span className="text-white/60 text-xs">{stat.description}</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                  {stat.value}
                </h3>
                
                {/* Visual loading meter bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: stat.stroke,
                      boxShadow: `0 0 10px ${stat.stroke}`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Network Status Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl bg-gradient-to-tr from-[#09090F]/80 to-[#12121F]/80 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#00FF66]/5 blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">All systems operational</h4>
              <p className="text-xs text-white/50 mt-1 max-w-md">
                BlocksScan mainnet validator nodes report 100% block production consensus over the past 30 days. No slashed nodes.
              </p>
            </div>
          </div>

          <a 
            href="#pricing"
            className="w-full md:w-auto text-center px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300"
          >
            Access API Endpoint
          </a>
        </motion.div>
      </div>
    </section>
  );
}
