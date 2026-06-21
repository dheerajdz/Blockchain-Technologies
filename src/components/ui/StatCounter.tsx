'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // in ms
  decimals?: number; // number of decimal places
}

export default function StatCounter({ value, suffix = '', duration = 1500, decimals }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      setCount(easeProgress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  // Determine decimal places if not explicitly provided
  const getDecimalPlaces = () => {
    if (decimals !== undefined) return decimals;
    const str = value.toString();
    if (str.includes('.')) {
      return str.split('.')[1].length;
    }
    return 0;
  };

  const isDecimal = decimals !== undefined || value.toString().includes('.');
  const formattedCount = isDecimal
    ? count.toFixed(getDecimalPlaces())
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="font-mono text-[32px] font-semibold text-white tracking-tight">
      {formattedCount}
      {suffix}
    </span>
  );
}
