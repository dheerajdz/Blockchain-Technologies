'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is BlocksScan Technologies?',
    answer: 'BlocksScan is a comprehensive suite of Web3 infrastructure products. We provide decentralized tools including custom node deployments (xblockchain), cross-chain exchange engines (GCX), AI-powered ledger search (AI-Smart Explorer), secure messaging payments (XDCGram), and open-source APIs (OpenScan SDK).',
  },
  {
    question: 'How does the xblockchain PoS engine work?',
    answer: 'xblockchain enables you to deploy custom Proof-of-Stake private or public blockchains. It supports client diversity out of the box, meaning you can configure and run nodes utilizing Geth, Reth, and Nethermind to ensure validation redundancy and prevent single points of failure.',
  },
  {
    question: 'Is GCX a non-custodial trading terminal?',
    answer: 'Yes, absolutely. GCX is a non-custodial trade route aggregator. Your funds are never held on our servers, and you maintain complete control over your private seed phrases. It integrates with multi-chain smart contracts to find and settle trades with minimal slippage.',
  },
  {
    question: 'How does the AI-Smart Explorer audit contracts?',
    answer: 'The AI-Smart Explorer interfaces directly with transaction traces and contract bytecodes. By using trained Large Language Models (LLMs), it scans for common vulnerability vectors (such as reentrancy bugs or integer overflows) and returns natural-language audit summaries in seconds.',
  },
  {
    question: 'What networks are supported by the OpenScan SDK?',
    answer: 'The OpenScan SDK supports Ethereum Mainnet, XDC Network, Polygon, Arbitrum, and any custom private networks built via xblockchain. Developers can access block details, address balances, and transaction logs using a unified client library.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#020205] noise-overlay border-b border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 bg-[#00FF66]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00FF66] font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
            Support center
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-base md:text-lg text-white/50">
            Find answers to common technical queries about node consensus, exchange routes, 
            contract tracing, and API credentials.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div
                key={idx}
                className="bg-[#09090F]/80 border border-white/5 rounded-2xl overflow-hidden transition-all duration-350"
                style={{
                  borderColor: isOpen ? 'rgba(0, 255, 102, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: isOpen ? '0 10px 30px -10px rgba(0, 255, 102, 0.05)' : 'none',
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#00FF66] transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors shrink-0 ml-4">
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                      )}
                    </motion.svg>
                  </div>
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
