'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceGCX() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="gcx"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0066FF]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Left Side */}
          <motion.div style={{ opacity, y }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Dashboard Mockup */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#00D4AA]/20 rounded-2xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Mock Header */}
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-white/40">GCX Dashboard</span>
                  </div>
                </div>

                {/* Mock Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Requests', value: '2.4M' },
                      { label: 'Latency', value: '12ms' },
                      { label: 'Uptime', value: '99.9%' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 h-32">
                    <div className="text-xs text-white/40 mb-2">API Requests</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
                        (height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#0066FF] to-[#00D4AA] rounded-sm"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                    <div className="text-white/40">{/* Fastify + Next.js */}</div>
                    <div className="text-[#00D4AA]">const</div>
                    <div className="text-white"> response = </div>
                    <div className="text-[#0066FF]">await</div>
                    <div className="text-white"> api.</div>
                    <div className="text-yellow-400">get</div>
                    <div className="text-white">(</div>
                    <div className="text-green-400">&apos;/blocks&apos;</div>
                    <div className="text-white">);</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div style={{ opacity, y }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0066FF] font-mono text-sm tracking-widest uppercase mb-4 block">
                Experience 02
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                GCX
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Seamless integration between Fastify backend and Next.js frontend.
                Experience a monorepo architecture that scales with your blockchain
                needs. Real-time data, type-safe APIs, and blazing-fast performance.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['Fastify', 'Next.js', 'Prisma', 'TypeScript', 'Tailwind'].map(
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
                  className="group px-6 py-3 bg-[#0066FF] text-white font-semibold rounded-full hover:bg-[#0066FF]/90 transition-all duration-300 btn-lift"
                >
                  Explore GCX
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Docs
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
