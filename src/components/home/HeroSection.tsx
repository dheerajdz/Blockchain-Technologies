'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const cardX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const cardY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Teal Radial Glow - Breathing Animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45, 212, 191, 0.15) 0%, rgba(13, 148, 136, 0.08) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x: cardX, y: cardY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#064E3B]/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="badge px-4 py-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse mr-2 inline-block" />
                Experience the Future of Blockchain
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="display-xl mb-6 tracking-tight font-heading"
            >
              <span className="block text-white">BlocksScan</span>
              <span className="block gradient-text mt-2">Technologies</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#A1A1AA] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-body"
            >
              We don't just build blockchain products.
              We craft <span className="text-white font-semibold">immersive experiences</span> that transform
              how you interact with decentralized technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 font-body"
            >
              <a href="#projects" className="btn btn-primary px-8 py-4 text-base">
                Explore Experiences
                <span className="inline-block ml-2">→</span>
              </a>
              <a href="#about" className="btn btn-outline px-8 py-4 text-base">
                Our Story
              </a>
            </motion.div>
          </div>

          {/* Right: Floating Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              style={{ x: cardX, y: cardY }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[400px] h-[320px] rounded-2xl border border-white/10 bg-[#141414]/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Card Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF]/40 to-transparent" />

              {/* Abstract 3D Visual Element */}
              <div className="relative h-full flex flex-col items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#064E3B]/30 border border-[#2DD4BF]/20 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#2DD4BF]/30 to-[#0D9488]/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </motion.div>

                <div className="mt-6 text-center">
                  <p className="text-white font-semibold text-sm">Blockchain Explorer</p>
                  <p className="text-[#71717A] text-xs mt-1">Real-time network insights</p>
                </div>

                {/* Mini Stats */}
                <div className="flex gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-[#2DD4BF] font-mono text-sm font-semibold">2.4M</p>
                    <p className="text-[#71717A] text-[10px]">Transactions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#2DD4BF] font-mono text-sm font-semibold">99.9%</p>
                    <p className="text-[#71717A] text-[10px]">Uptime</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#71717A]/50 font-body"
          >
            <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
            <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
