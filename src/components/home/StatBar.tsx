'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Clients Served' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 6, suffix: '', label: 'Years Active' },
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

export default function StatBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 bg-[#0A0A0A]">
      <div className="container" ref={containerRef}>
        {/* Stats Grid */}
        <div className="relative">
          {/* Sparkline SVG */}
          <svg
            className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 pointer-events-none hidden lg:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 60 Q 125 40, 250 45 T 500 35 T 750 25 T 1000 20"
              fill="none"
              stroke="rgba(45, 212, 191, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
            />
          </svg>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="stat-item text-center"
              >
                <p className="stat-number text-[#4C6FC2]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[#A1A1AA] text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
