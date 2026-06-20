'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceOpenScan() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="openscan"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D4AA]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div style={{ opacity, y }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#00D4AA] font-mono text-sm tracking-widest uppercase mb-4 block">
                Experience 05
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                OpenScan
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                See everything. The most advanced blockchain explorer for XDC
                Network. Real-time blocks, transactions, smart contracts, and
                analytics. Powered by AI, built for clarity.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['Explorer', 'Analytics', 'XDC', 'AI-Powered'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="group px-6 py-3 bg-[#00D4AA] text-black font-semibold rounded-full hover:bg-[#00D4AA]/90 transition-all duration-300 btn-lift"
                >
                  Explore XDC
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View API
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual - Right Side */}
          <motion.div style={{ opacity, y }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Explorer Interface Mockup */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00D4AA]/20 to-[#0066FF]/20 rounded-2xl border border-white/10 backdrop-blur-sm p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Search Bar */}
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 mb-6 border border-white/10">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-white/40 text-sm">Search by address, block, tx...</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Block Height', value: '58,923,421' },
                    { label: 'Transactions', value: '2.4B' },
                    { label: 'TPS', value: '2,000+' },
                    { label: 'Validators', value: '108' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Blocks */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-xs text-white/40 mb-3">Recent Blocks</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#00D4AA]/20 flex items-center justify-center">
                          <span className="text-[#00D4AA] text-xs">B</span>
                        </div>
                        <div>
                          <div className="text-sm text-white">Block #{58923421 - i}</div>
                          <div className="text-xs text-white/40">2 mins ago</div>
                        </div>
                      </div>
                      <div className="text-xs text-white/60">2,847 txs</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
