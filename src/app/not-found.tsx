'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Home, Search } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10 text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter gradient-text select-none">
              404
            </span>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#A1A1AA] body-md max-w-md mx-auto mb-10"
          >
            The page you are looking for does not exist or has been moved. 
            Let&apos;s get you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/" className="btn btn-primary inline-flex items-center justify-center gap-2">
              <Home className="h-4 w-4" strokeWidth={1.5} />
              Back to Home
            </Link>
            <Link href="/projects" className="btn btn-outline inline-flex items-center justify-center gap-2">
              <Search className="h-4 w-4" strokeWidth={1.5} />
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
