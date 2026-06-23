'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── DATA ─── */

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    slug: 'smart-contracts',
    title: 'Smart Contracts',
    shortDescription: 'Secure, audited smart contract development for Ethereum, XDC, and EVM-compatible chains.',
    fullDescription: 'We design and develop secure, gas-optimized smart contracts tailored to your business logic. Every contract undergoes rigorous internal review before deployment, with optional third-party audit partnerships.',
    icon: 'ScrollText',
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
    icon: 'Layers',
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
    icon: 'Globe',
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
    icon: 'Search',
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
    icon: 'BrainCircuit',
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
    icon: 'Lightbulb',
    features: [
      'Blockchain feasibility and use-case analysis',
      'Tokenomics design and economic modeling',
      'Regulatory compliance and legal framework guidance',
      'Vendor selection and technology stack advisory',
      'Workshops and team training programs',
    ],
  },
];

/* ─── PAGE ─── */

export default function ServiceDetailPage() {
  const slug = (useParams()?.slug as string) ?? '';
  const service = services.find((s) => s.slug === slug) || null;

  if (!service) {
    return (
      <main className="relative min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <div className="pt-32 pb-20 container text-center">
          <h1 className="heading-1 mb-4">Service Not Found</h1>
          <p className="text-[#A1A1AA] mb-8">The service you are looking for does not exist.</p>
          <Link href="/services" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.a
            href="/services"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm">Back to Services</span>
          </motion.a>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label mb-4 inline-block text-accent-300"
          >
            Service Detail
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-xl mb-6 max-w-4xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <div className="max-w-[680px] mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-[#A1A1AA] body-md leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="heading-2 mb-6">What&apos;s Included</h2>
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="card p-5 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20">
                      <Check className="h-4 w-4 text-accent-300" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed pt-1">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="glow-divider my-12" />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="heading-2 mb-4">Interested in {service.title}?</h3>
              <p className="text-[#A1A1AA] mb-6">
                Let&apos;s discuss how we can tailor this service to your specific needs.
              </p>
              <a href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
