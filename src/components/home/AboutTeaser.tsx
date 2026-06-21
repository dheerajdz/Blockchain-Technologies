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
    <section id="about" className="section bg-[#0A0A0A]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block"
          >
            About Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            Building the Future of{' '}
            <span className="gradient-text">Decentralized Technology</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-lg text-[#A1A1AA] mb-12 leading-relaxed"
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
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] text-sm hover:border-[#2DD4BF]/30 hover:text-[#2DD4BF] transition-colors cursor-default"
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
