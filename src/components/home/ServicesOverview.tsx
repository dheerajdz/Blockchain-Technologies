'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Smart Contracts',
    description: 'Secure, audited smart contract development for Ethereum, XDC, and EVM-compatible chains.',
    icon: '🔗',
  },
  {
    title: 'DApp Development',
    description: 'End-to-end decentralized application development with intuitive UX and robust backends.',
    icon: '⚡',
  },
  {
    title: 'Web3 Solutions',
    description: 'Custom Web3 integrations including wallet connectivity, token standards, and DeFi protocols.',
    icon: '🌐',
  },
  {
    title: 'Blockchain Explorer',
    description: 'High-performance block explorers with real-time data, advanced search, and analytics dashboards.',
    icon: '🔍',
  },
  {
    title: 'AI Integration',
    description: 'Intelligent automation and AI-powered analytics for blockchain data and user experiences.',
    icon: '🤖',
  },
  {
    title: 'Consulting',
    description: 'Strategic blockchain consulting for enterprise adoption, tokenomics, and ecosystem design.',
    icon: '💡',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card p-6 md:p-8 cursor-default group"
    >
      {/* Icon */}
      <motion.div
        animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-12 h-12 rounded-xl bg-[#2A468B]/10 border border-[#2A468B]/20 flex items-center justify-center text-2xl mb-5"
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="heading-3 text-white mb-3 group-hover:text-[#4C6FC2] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#A1A1AA] text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(400px circle at 50% 50%, rgba(42, 70, 139, 0.06), transparent 60%)',
        }}
      />
    </motion.div>
  );
}

export default function ServicesOverview() {
  return (
    <section id="services" className="section bg-[#0A0A0A]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-[#4C6FC2]"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-4"
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-md max-w-2xl mx-auto"
          >
            From concept to deployment, we deliver comprehensive blockchain solutions
            tailored to your unique requirements.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
