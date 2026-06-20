'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceXblockchain() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      id="xblockchain"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D4AA]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div style={{ opacity, y }} className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#00D4AA] font-mono text-sm tracking-widest uppercase mb-4 block">
                Experience 01
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                xblockchain
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Build your own Proof-of-Stake network. Private. Secure. Fully
                customizable. Experience the power of running a heterogeneous
                multi-client blockchain with Geth, Reth, and Nethermind.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['Geth', 'Reth', 'Nethermind', 'Prysm', 'Lighthouse'].map(
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
                  Try Demo
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Watch Film
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ scale, opacity }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated Network Visualization */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                {/* Outer Ring */}
                <div className="absolute w-full h-full border border-[#00D4AA]/20 rounded-full" />
                {/* Middle Ring */}
                <div className="absolute w-3/4 h-3/4 border border-[#00D4AA]/30 rounded-full" />
                {/* Inner Ring */}
                <div className="absolute w-1/2 h-1/2 border border-[#00D4AA]/40 rounded-full" />
              </motion.div>

              {/* Center Node */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#0066FF] flex items-center justify-center glow-strong">
                  <span className="text-white font-bold text-2xl">PoS</span>
                </div>
              </motion.div>

              {/* Orbiting Nodes */}
              {[0, 72, 144, 216, 288].map((degree, i) => (
                <motion.div
                  key={degree}
                  className="absolute w-4 h-4"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${degree}deg) translateX(150px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#00D4AA]" />
                </motion.div>
              ))}

              {/* Terminal Overlay */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 font-mono text-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-[#00D4AA]">$ geth init</div>
                <div className="text-white/60">Genesis state: e5da70..04afe9</div>
                <div className="text-white/60">Chain ID: 2345</div>
                <div className="text-[#00D4AA] mt-2">✓ Network ready</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
