'use client';

import { motion } from 'motion/react';

const techStack = [
  { name: 'Next.js', icon: 'N' },
  { name: 'React', icon: 'R' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind', icon: 'TW' },
  { name: 'Node.js', icon: 'N' },
  { name: 'MongoDB', icon: 'M' },
  { name: 'Firebase', icon: 'F' },
  { name: 'Solidity', icon: 'S' },
];

export default function AboutTeaser() {
  return (
    <section id="about" className="relative section bg-white pt-32 pb-24">
      {/* Gradient bleed from hero — matches hero gradient endpoint exactly */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-[#2A468B]"
          >
            About Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-6 text-[#18181B]"
          >
            Building the Future of{' '}
            <span className="bg-gradient-to-r from-[#2A468B] to-[#4C6FC2] bg-clip-text text-transparent">
              Decentralized Technology
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-lg text-[#52525B] mb-12 leading-relaxed"
          >
            BlocksScan Technologies is a pioneering blockchain development company 
            dedicated to creating cutting-edge solutions that bridge the gap between 
            traditional systems and decentralized networks. From blockchain explorers 
            to AI-powered analytics, we deliver experiences that redefine how the world 
            interacts with Web3.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[#71717A] text-sm mb-6">Powered by modern technology</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-[#18181B]/5 border border-[#18181B]/10 text-[#52525B] text-sm hover:border-[#4C6FC2]/30 hover:text-[#2A468B] transition-colors cursor-default"
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
