'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ScrollText,
  Layers,
  Globe,
  Search,
  BrainCircuit,
  Lightbulb,
  ArrowRight,
  Check,
} from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── DATA ─── */

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  features: string[];
}

const services: Service[] = [
  {
    slug: 'smart-contracts',
    title: 'Smart Contracts',
    shortDescription: 'Secure, audited smart contract development for Ethereum, XDC, and EVM-compatible chains.',
    fullDescription: 'We design and develop secure, gas-optimized smart contracts tailored to your business logic. Every contract undergoes rigorous internal review before deployment, with optional third-party audit partnerships.',
    icon: ScrollText,
    features: [
      'Custom ERC-20 / ERC-721 / ERC-1155 token contracts',
      'DeFi protocol development (staking, lending, DEX)',
      'Multi-sig and timelock governance contracts',
      'Gas optimization and upgradeable proxy patterns',
      'Comprehensive test coverage with Hardhat/Foundry',
    ],
  },
  {
    slug: 'dapp-development',
    title: 'DApp Development',
    shortDescription: 'End-to-end decentralized application development with intuitive UX and robust backends.',
    fullDescription: 'From concept to deployment, we build full-stack decentralized applications that users love. Our DApps combine beautiful frontends with secure smart contract backends.',
    icon: Layers,
    features: [
      'React / Next.js frontend with Web3 wallet integration',
      'Real-time blockchain event indexing and caching',
      'IPFS storage and decentralized hosting setup',
      'Mobile-responsive PWA support',
      'CI/CD pipelines for automated testing and deployment',
    ],
  },
  {
    slug: 'web3-solutions',
    title: 'Web3 Solutions',
    shortDescription: 'Custom Web3 integrations including wallet connectivity, token standards, and DeFi protocols.',
    fullDescription: 'Seamlessly integrate Web3 capabilities into your existing products. We handle wallet connections, transaction flows, and on-chain data retrieval so you can focus on your core business.',
    icon: Globe,
    features: [
      'WalletConnect, MetaMask, and WalletLink integration',
      'Custom RPC and node infrastructure setup',
      'Token gating and NFT membership systems',
      'On-chain identity and credential verification',
      'Cross-chain bridge and messaging integrations',
    ],
  },
  {
    slug: 'blockchain-explorer',
    title: 'Blockchain Explorer',
    shortDescription: 'High-performance block explorers with real-time data, advanced search, and analytics dashboards.',
    fullDescription: 'We build blazing-fast blockchain explorers that make on-chain data accessible. Our explorers handle millions of transactions with sub-second query response times.',
    icon: Search,
    features: [
      'Real-time block and transaction indexing',
      'Advanced search with filters and autocomplete',
      'Smart contract verification and source code display',
      'Rich analytics dashboards and exportable reports',
      'API access for third-party integrations',
    ],
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    shortDescription: 'Intelligent automation and AI-powered analytics for blockchain data and user experiences.',
    fullDescription: 'Leverage artificial intelligence to extract insights from blockchain data. From anomaly detection to natural language querying, we make your data work smarter.',
    icon: BrainCircuit,
    features: [
      'Anomaly detection for suspicious transaction patterns',
      'Natural language querying of on-chain data',
      'Predictive analytics for market trends',
      'Automated smart contract vulnerability scanning',
      'AI-powered customer support chatbots',
    ],
  },
  {
    slug: 'consulting',
    title: 'Consulting',
    shortDescription: 'Strategic blockchain consulting for enterprise adoption, tokenomics, and ecosystem design.',
    fullDescription: 'Navigate the blockchain landscape with expert guidance. We help enterprises evaluate, plan, and execute blockchain strategies that deliver measurable ROI.',
    icon: Lightbulb,
    features: [
      'Blockchain feasibility and use-case analysis',
      'Tokenomics design and economic modeling',
      'Regulatory compliance and legal framework guidance',
      'Vendor selection and technology stack advisory',
      'Workshops and team training programs',
    ],
  },
];

/* ─── COMPONENTS ─── */

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.a
      href={`/services/${service.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card p-6 md:p-8 cursor-pointer group block"
    >
      {/* Icon Badge */}
      <motion.div
        animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mb-5"
      >
        <Icon className="h-6 w-6 text-accent-300" strokeWidth={1.5} />
      </motion.div>

      {/* Title */}
      <h3 className="heading-3 text-white mb-3 group-hover:text-accent-300 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
        {service.shortDescription}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-accent-300 text-sm font-medium">
        <span>Learn more</span>
        <motion.span
          animate={hovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </div>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(400px circle at 50% 50%, rgba(42, 70, 139, 0.06), transparent 60%)',
        }}
      />
    </motion.a>
  );
}

/* ─── PAGE ─── */

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-accent-300"
          >
            What We Do
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            From smart contracts to AI-powered analytics, we provide end-to-end blockchain 
            solutions tailored to your unique requirements.
          </motion.p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section cta-glow">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-1 mb-6"
          >
            Ready to Get <span className="gradient-text">Started</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A1A1AA] body-md max-w-xl mx-auto mb-8"
          >
            Let&apos;s discuss how our services can help you achieve your blockchain goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="/projects" className="btn btn-outline">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
