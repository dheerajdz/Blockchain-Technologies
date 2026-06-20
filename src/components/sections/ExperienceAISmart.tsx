'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceAISmart() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="ai-smart"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#FF6B35]/5 to-black" />

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
              <span className="text-[#FF6B35] font-mono text-sm tracking-widest uppercase mb-4 block">
                Experience 03
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI-Smart
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Intelligence that protects. Experience AI-powered security
                auditing that finds vulnerabilities before they find you.
                Smart contract analysis, automated scanning, and intelligent
                threat detection.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['AI', 'Security', 'Smart Contracts', 'Automation'].map(
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
                  className="group px-6 py-3 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-all duration-300 btn-lift"
                >
                  Try AI Scan
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual - Right Side */}
          <motion.div style={{ opacity, y }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* AI Brain Visualization */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute w-full h-full border border-[#FF6B35]/20 rounded-full" />
                <div className="absolute w-3/4 h-3/4 border border-[#FF6B35]/30 rounded-full" />
                <div className="absolute w-1/2 h-1/2 border border-[#FF6B35]/40 rounded-full" />
              </motion.div>

              {/* Center AI Core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F5A] flex items-center justify-center glow-strong">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
              </motion.div>

              {/* Scanning Nodes */}
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
                  <div className="w-full h-full rounded-full bg-[#FF6B35]" />
                </motion.div>
              ))}

              {/* Security Badge Overlay */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 font-mono text-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-[#FF6B35]">$ ai-smart scan</div>
                <div className="text-white/60">Analyzing contract...</div>
                <div className="text-white/60">3 vulnerabilities found</div>
                <div className="text-[#FF6B35] mt-2">⚠️ Critical: 1</div>
                <div className="text-yellow-400">⚠️ Warning: 2</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
