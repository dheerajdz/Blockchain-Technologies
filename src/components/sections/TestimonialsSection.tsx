'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Lead Blockchain Architect, dApp Network',
    text: "The xblockchain multi-client node setup has saved our dev team weeks. Running Reth, Nethermind, and Geth side-by-side works flawlessly out of the box.",
    initial: 'S',
    color: 'from-[#00FF66] to-[#06B6D4]',
  },
  {
    name: 'Marcus K.',
    role: 'Smart Contract Auditor, Securify',
    text: "AI-Smart Explorer is magical. Being able to decode contract bytecode and query variables directly in natural language makes our verification audits 10x faster.",
    initial: 'M',
    color: 'from-[#7C3AED] to-[#EC4899]',
  },
  {
    name: 'Ananya Nair',
    role: 'CTO, Fluid Liquidity',
    text: "GCX trade routes settled literally instantly with next to zero slippage. BlocksScan's RPC APIs have low latency. We migrated all our webhook systems here.",
    initial: 'A',
    color: 'from-[#EC4899] to-[#FF6B35]',
  },
  {
    name: 'David Foster',
    role: 'Infrastructure Lead, TechFund',
    text: "Validator Node SLA support is institutional grade. The uptime guarantees are backed by robust peering systems, ensuring our distributed validating remains active 24/7.",
    initial: 'D',
    color: 'from-[#06B6D4] to-[#7C3AED]',
  },
  {
    name: 'Sejal Mukane',
    role: 'UI Designer, Web3 Labs',
    text: "XDCGram micro-payments integration was incredibly simple to setup. Sending transactions directly within active chat threads creates a seamless payment experience.",
    initial: 'S',
    color: 'from-[#00FF66] to-[#7C3AED]',
  },
  {
    name: 'Yash Patkar',
    role: 'Frontend Engineer, BlocksScan Developer',
    text: "The OpenScan SDK client is our daily driver. Querying blocks data, verifying contracts, and listening to mempool events has never been more straightforward.",
    initial: 'Y',
    color: 'from-[#FF6B35] to-[#00FF66]',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#020205] noise-overlay border-b border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EC4899]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00FF66] font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
            Customer Success
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Loved by <span className="gradient-text">Web3 Builders</span>
          </h2>
          <p className="text-base md:text-lg text-white/50">
            Hear from smart contract engineers, protocol leads, and decentralized developers 
            building on top of the BlocksScan ecosystem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-[#09090F]/80 border border-white/5 rounded-3xl p-6 flex flex-col justify-between card-hover relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-[#00FF66]" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                "{item.text}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-white/5">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-black font-black text-sm shrink-0 shadow-md`}>
                  {item.initial}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">{item.name}</span>
                  <span className="text-[10px] text-white/45 font-medium mt-0.5">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
