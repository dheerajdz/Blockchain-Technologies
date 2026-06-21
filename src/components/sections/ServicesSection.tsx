"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Smart Contract Development",
    subtitle: "Security & Optimization",
    description: "Design, write, and audit robust smart contracts. We utilize formal verification methods and gas optimization strategies to ensure secure, cost-effective deployments.",
    tag: "Rust / Solidity / WASM",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Decentralized Apps (dApps)",
    subtitle: "Full-Stack Web3 Client",
    description: "Craft responsive, user-centric interfaces hooked directly into decentralized ledgers. We connect wallets, index logs, and handle multi-chain state synchronization.",
    tag: "React / Next.js / Ethers.js",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Web3 Solutions & RPCs",
    subtitle: "Dedicated Infrastructure",
    description: "Deploy private validator clusters, establish low-latency read/write RPC nodes, and build custom indexing middleware to handle massive enterprise throughput.",
    tag: "Go / Reth / Nethermind",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-bg-base py-28 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#1B4FD8]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl font-body">
            <span className="text-[#1B4FD8] font-mono text-sm tracking-widest uppercase mb-4 block font-semibold">
              Core Services
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-white">
              Sleek solutions for the next web
            </h2>
          </div>
          <p className="font-body text-text-secondary text-sm sm:text-base max-w-sm leading-relaxed">
            We provide full-lifecycle developer support, from architectural wireframing to mainnet deployments and indexing queries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#1B4FD8]/5 border border-[#1B4FD8]/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="badge badge-gray font-mono font-medium">
                    {service.tag}
                  </span>
                </div>

                {/* Service Details */}
                <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-text-muted mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between group/link cursor-pointer">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/50 group-hover/link:text-[#1B4FD8] transition-colors">
                  Learn more
                </span>
                <svg className="w-4 h-4 text-white/30 group-hover/link:text-[#1B4FD8] group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
