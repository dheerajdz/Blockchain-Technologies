'use client';

import { motion } from 'motion/react';

interface PageLoaderProps {
  text?: string;
}

export default function PageLoader({ text = 'Loading...' }: PageLoaderProps) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 border-2 border-accent-500/20 border-t-accent-500 rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#A1A1AA] text-sm"
      >
        {text}
      </motion.p>
    </div>
  );
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          className="card p-6 space-y-4"
        >
          <div className="h-12 w-12 rounded-full bg-white/5" />
          <div className="h-6 w-3/4 rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-2/3 rounded bg-white/5" />
        </motion.div>
      ))}
    </div>
  );
}

export function ListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
          className="card p-5 flex items-center gap-4"
        >
          <div className="h-10 w-10 rounded-full bg-white/5 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-5 w-1/3 rounded bg-white/5" />
            <div className="h-4 w-1/2 rounded bg-white/5" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
