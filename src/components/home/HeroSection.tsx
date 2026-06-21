'use client';

import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  x: string;
  y: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects', x: '10%', y: '20%' },
  { value: 30, suffix: '+', label: 'Clients', x: '35%', y: '60%' },
  { value: 15, suffix: '+', label: 'Technologies', x: '65%', y: '30%' },
  { value: 6, suffix: '', label: 'Years', x: '90%', y: '70%' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setCount(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const orbX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const orbY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Check for reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Continuous Gradient Background */}
      <div className="absolute inset-0 gradient-flow" />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating 3D Orbs - CSS Based */}
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#2DD4BF]/8 rounded-full blur-[100px]"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ x: orbX, y: orbY }}
          />
          <motion.div
            className="absolute top-[25%] right-[15%] w-48 h-48 bg-[#0D9488]/10 rounded-full blur-[80px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[30%] w-80 h-80 bg-[#064E3B]/15 rounded-full blur-[120px]"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* 3D-like Ring Elements */}
          <motion.div
            className="absolute top-[20%] right-[20%] w-32 h-32 border-2 border-[#2DD4BF]/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ x: orbX, y: orbY }}
          />
          <motion.div
            className="absolute top-[20%] right-[20%] w-32 h-32 border border-[#0D9488]/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ x: orbX, y: orbY }}
          />
          <motion.div
            className="absolute top-[15%] left-[15%] w-24 h-24 border border-[#2DD4BF]/15 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
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

            {/* Main Title - Two Tone */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading font-bold mb-6 tracking-tight"
              style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.05 }}
            >
              <span className="block text-white">BlocksScan</span>
              <span className="block mt-2 bg-gradient-to-r from-white via-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                Technologies
              </span>
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

          {/* Right: Floating Preview Card with Spline 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={reducedMotion ? {} : { y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[420px] h-[360px] rounded-2xl border border-white/10 bg-[#141414]/60 backdrop-blur-xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Card Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF]/40 to-transparent" />

              {/* 3D Visual Inside Card */}
              <div className="relative w-full h-full flex items-center justify-center">
                {!reducedMotion ? (
                  <>
                    {/* Rotating 3D-like Rings */}
                    <motion.div
                      className="absolute w-40 h-40 border-2 border-[#2DD4BF]/30 rounded-full"
                      animate={{ rotateX: 360, rotateY: 180 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      style={{ perspective: '1000px' }}
                    />
                    <motion.div
                      className="absolute w-32 h-32 border border-[#0D9488]/20 rounded-full"
                      animate={{ rotateX: -360, rotateY: -180 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      style={{ perspective: '1000px' }}
                    />
                    <motion.div
                      className="absolute w-24 h-24 bg-gradient-to-br from-[#2DD4BF]/20 to-[#064E3B]/30 rounded-2xl flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg className="w-10 h-10 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </motion.div>
                  </>
                ) : (
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#064E3B]/30 border border-[#2DD4BF]/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Woven into Gradient */}
      <div ref={statsRef} className="relative z-10 py-24">
        <div className="container">
          {/* SVG Sparkline */}
          <svg
            className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden lg:block"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 120 Q 200 40, 350 80 T 650 60 T 950 100 T 1150 40"
              fill="none"
              stroke="rgba(45, 212, 191, 0.4)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={statsInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            />
            {/* Glow underneath */}
            <motion.path
              d="M 50 120 Q 200 40, 350 80 T 650 60 T 950 100 T 1150 40"
              fill="none"
              stroke="rgba(45, 212, 191, 0.15)"
              strokeWidth="8"
              filter="blur(8px)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={statsInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            />
          </svg>

          {/* Stats Grid - Staggered */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center"
                style={{
                  marginTop: i % 2 === 0 ? '0' : '40px',
                }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[#A1A1AA] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
    </section>
  );
}
