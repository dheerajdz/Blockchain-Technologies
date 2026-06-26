'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── PAGE ─── */

export default function TermsPage() {
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
            Terms of Service
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
                Please read these Terms of Service (&quot;Terms&quot;) carefully before using the website or services of BlocksScan Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                By accessing and using our website, products, and services, you accept and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">2. Description of Services</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                BlocksScan Technologies provides blockchain development, consulting, and related technology services. Our services include but are not limited to:
              </p>
              <ul className="space-y-2 mb-6 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Smart contract development and auditing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Decentralized application (DApp) development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Blockchain explorer and analytics tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Web3 integration and consulting services</span>
                </li>
              </ul>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">3. Use of Services</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="space-y-2 mb-6 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Use our services in any way that violates applicable laws or regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Attempt to gain unauthorized access to any part of our systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Interfere with or disrupt the integrity or performance of our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300 mt-2 flex-shrink-0" />
                  <span>Reverse engineer, decompile, or disassemble any aspect of our technology</span>
                </li>
              </ul>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">4. Intellectual Property</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                All content, features, and functionality on our website and services — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are the exclusive property of BlocksScan Technologies or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">6. Limitation of Liability</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                In no event shall BlocksScan Technologies, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">7. Indemnification</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                You agree to indemnify and hold harmless BlocksScan Technologies and its affiliates, officers, agents, and employees from any claim or demand made by any third party due to or arising out of your use of our services, your violation of these Terms, or your violation of any rights of another.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">8. Governing Law</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action arising out of these Terms shall be filed in the courts located in Mumbai, Maharashtra.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">9. Changes to Terms</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-white text-xl font-semibold mt-10 mb-4">10. Contact Us</h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:legal@blocksscan.io" className="text-accent-300 hover:underline">
                  legal@blocksscan.io
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
