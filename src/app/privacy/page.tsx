'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── PAGE ─── */

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm">Back to Home</span>
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-lg mb-4 max-w-4xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-md max-w-2xl"
          >
            Last updated: June 21, 2025
          </motion.p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[680px] mx-auto"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                BlocksScan Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 mb-6 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Fill out our contact form or request information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Subscribe to newsletters or updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Apply for job openings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Use our blockchain explorer or other tools</span>
                </li>
              </ul>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                This information may include your name, email address, phone number, and any other details you choose to provide.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 mb-6 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Process job applications and recruitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Send you updates, newsletters, and marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Improve our website, products, and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Comply with legal obligations</span>
                </li>
              </ul>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">3. Data Storage and Security</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">4. Third-Party Disclosure</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect our rights.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">5. Cookies and Tracking</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We may use cookies and similar tracking technologies to enhance your experience on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">6. Your Rights</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2 mb-6 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Request correction or deletion of your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Object to or restrict certain processing activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Withdraw consent where processing is based on consent</span>
                </li>
              </ul>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">7. Contact Us</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:privacy@blocksscan.io" className="text-accent-300 hover:underline">
                  privacy@blocksscan.io
                </a>
                <br />
                <strong className="text-white">Address:</strong> Mumbai, Maharashtra, India
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
