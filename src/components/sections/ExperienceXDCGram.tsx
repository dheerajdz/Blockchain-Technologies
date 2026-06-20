'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceXDCGram() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="xdcgram"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D4AA]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Left Side */}
          <motion.div style={{ opacity, y }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Phone Mockup */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] border-4 border-gray-700 p-4 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex flex-col">
                    {/* Telegram Header */}
                    <div className="bg-[#0088cc] p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">X</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">XDCGram Bot</div>
                        <div className="text-white/60 text-xs">online</div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 space-y-3 overflow-hidden">
                      <motion.div
                        className="bg-[#0088cc] text-white p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        Welcome to XDCGram! 🚀
                      </motion.div>

                      <motion.div
                        className="bg-[#0088cc] text-white p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        Track XDC prices, blocks, and transactions in real-time.
                      </motion.div>

                      <motion.div
                        className="bg-[#0088cc] text-white p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        Latest block: #58923421 ⛏️
                      </motion.div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10">
                      <div className="bg-white/10 rounded-full px-4 py-2 text-sm text-white/40">
                        Type a message...
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Notification */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#0088cc] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                New Block! 🔔
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
              <span className="text-[#0088cc] font-mono text-sm tracking-widest uppercase mb-4 block">
                Experience 04
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                XDCGram
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Connect instantly with the XDC ecosystem. Experience real-time
                blockchain notifications, price tracking, and transaction monitoring
                directly in Telegram. Your blockchain companion, always online.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['Telegram', 'XDC', 'Real-time', 'Notifications'].map(
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
                  className="group px-6 py-3 bg-[#0088cc] text-white font-semibold rounded-full hover:bg-[#0088cc]/90 transition-all duration-300 btn-lift"
                >
                  Try XDCGram
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  How it Works
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
