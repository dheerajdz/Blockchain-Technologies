'use client';

import { motion } from 'motion/react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden cta-glow">
      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45, 212, 191, 0.12) 0%, rgba(13, 148, 136, 0.05) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block"
          >
            Get In Touch
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-lg mb-6"
          >
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#A1A1AA] mb-10 leading-relaxed"
          >
            Let's discuss how BlocksScan Technologies can help you achieve your blockchain goals.
            Whether it's a new project or scaling an existing one, we're here to help.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:contact@blocksscan.io" className="btn btn-primary px-8 py-4 text-base">
              Start a Conversation
              <span className="inline-block ml-2">→</span>
            </a>
            <a href="#services" className="btn btn-outline px-8 py-4 text-base">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
