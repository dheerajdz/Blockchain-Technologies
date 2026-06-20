'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BentoFeatures() {
  const [swapAmount, setSwapAmount] = useState('1.5');
  const [aiResponse, setAiResponse] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const triggerAIQuery = () => {
    if (aiLoading) return;
    setAiLoading(true);
    setTimeout(() => {
      setAiResponse(true);
      setAiLoading(false);
    }, 1500);
  };

  return (
    <section id="ecosystem" className="relative py-28 bg-[#020205] noise-overlay border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00FF66] font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
            Ecosystem Core
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Explore the <span className="gradient-text">BlocksScan Suite</span>
          </h2>
          <p className="text-base md:text-lg text-white/50">
            A comprehensive suite of decentralized solutions designed to build, explore, 
            and interact with private and public blockchain architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: xblockchain (Large Card - Span 3 cols, Span 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-[#09090F]/90 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover relative overflow-hidden h-[420px]"
          >
            {/* Visual background element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00FF66]/5 blur-3xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] text-[#00FF66] border border-[#00FF66]/20 bg-[#00FF66]/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                Deploy Node
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">xblockchain</h3>
              <p className="text-sm text-white/50 max-w-sm">
                Build and launch your custom Proof-of-Stake private consensus engine. Support for multi-client networks utilizing Geth, Reth, and Nethermind.
              </p>
            </div>

            {/* Visual consensus simulator */}
            <div className="relative h-44 w-full flex items-center justify-center border border-white/5 bg-black/40 rounded-2xl overflow-hidden mt-6">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <motion.div 
                className="w-24 h-24 rounded-full border-2 border-dashed border-[#00FF66]/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#00FF66] -translate-y-12" />
                <div className="w-2 h-2 rounded-full bg-[#7C3AED] translate-x-12" />
                <div className="w-2 h-2 rounded-full bg-[#EC4899] translate-y-12" />
              </motion.div>
              <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-[#00FF66] to-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                <span className="text-[9px] text-black font-extrabold">PoS</span>
              </div>
              <div className="absolute bottom-2 left-3 font-mono text-[9px] text-white/40">
                Active Peer Connections: 24/24
              </div>
            </div>
          </motion.div>

          {/* Card 2: GCX (Medium Card - Span 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-[#09090F]/90 border border-white/5 rounded-3xl p-8 flex flex-col justify-between card-hover-purple relative overflow-hidden h-[420px]"
          >
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#7C3AED]/5 blur-3xl pointer-events-none" />

            <div>
              <span className="text-[10px] text-[#7C3AED] border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                Exchange Engine
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">GCX Terminal</h3>
              <p className="text-sm text-white/50 max-w-sm">
                Liquidity-aggregated decentralized swap portal. Experience near-zero slippage, sub-second settlement, and cross-chain execution.
              </p>
            </div>

            {/* Trading Swap Mockup */}
            <div className="bg-[#040408] border border-white/5 rounded-2xl p-4 mt-6">
              <div className="flex justify-between items-center text-xs text-white/40 mb-2">
                <span>Swap Assets</span>
                <span>Slippage: 0.1%</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-2 flex justify-between items-center">
                  <input
                    type="number"
                    value={swapAmount}
                    onChange={(e) => setSwapAmount(e.target.value)}
                    className="bg-transparent text-sm font-bold text-white w-20 focus:outline-none"
                  />
                  <span className="text-xs text-white/80 font-bold">ETH</span>
                </div>
                <div className="flex items-center text-white/40 font-bold px-1">→</div>
                <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-2 flex justify-between items-center">
                  <span className="text-sm font-bold text-[#00FF66]">
                    {(parseFloat(swapAmount) * 3500 || 0).toLocaleString()}
                  </span>
                  <span className="text-xs text-white/80 font-bold">XDC</span>
                </div>
              </div>
              <button 
                onClick={() => setSwapAmount('10.0')}
                className="w-full mt-3 py-2.5 bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white text-xs font-bold uppercase rounded-lg shadow-lg active:scale-95 transition-all"
              >
                Execute Swap Route
              </button>
            </div>
          </motion.div>

          {/* Card 3: AI-Smart (Span 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#09090F]/90 border border-white/5 rounded-3xl p-6 flex flex-col justify-between card-hover relative overflow-hidden min-h-[380px]"
          >
            <div>
              <span className="text-[10px] text-[#00FF66] border border-[#00FF66]/20 bg-[#00FF66]/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                AI Agent
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">AI-Smart Explorer</h3>
              <p className="text-xs text-white/50">
                Decode bytecodes and trace security anomalies simply by prompting our integrated LLM model.
              </p>
            </div>

            {/* Smart Agent prompt mockup */}
            <div className="bg-[#040408] border border-white/5 rounded-xl p-3 flex flex-col gap-2 mt-4 text-[10px] font-mono">
              <div className="text-white/40 flex justify-between">
                <span>Prompt Explorer</span>
                <span className="text-[#00FF66]">Active</span>
              </div>
              <div className="bg-white/5 border border-white/5 rounded p-2 text-white/70">
                &quot;Decode contract function at 0x892a...&quot;
              </div>
              {aiLoading ? (
                <div className="text-[#00FF66] animate-pulse">Analyzing contract vulnerabilities...</div>
              ) : aiResponse ? (
                <div className="text-[#00FF66] bg-[#00FF66]/5 border border-[#00FF66]/10 p-2 rounded">
                  ✓ Verified: standard ERC-20 contract. 0 vulnerabilities found.
                </div>
              ) : (
                <button
                  onClick={triggerAIQuery}
                  className="w-full text-center py-1.5 bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-extrabold uppercase rounded transition-colors"
                >
                  Analyze Contract
                </button>
              )}
            </div>
          </motion.div>

          {/* Card 4: XDCGram (Span 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#09090F]/90 border border-white/5 rounded-3xl p-6 flex flex-col justify-between card-hover-purple relative overflow-hidden min-h-[380px]"
          >
            <div>
              <span className="text-[10px] text-[#7C3AED] border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                Secure Chat
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">XDCGram</h3>
              <p className="text-xs text-white/50">
                Decentralized chat platform integrated with micro-payment layers for instant, secure asset transfers.
              </p>
            </div>

            {/* Chat transaction visual */}
            <div className="bg-[#040408] border border-white/5 rounded-xl p-3 flex flex-col gap-2 mt-4 text-[10px]">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center font-bold text-[8px]">A</div>
                <div className="bg-white/5 border border-white/5 p-2 rounded-lg text-white/80">
                  Can you send 150 XDC for gas?
                </div>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 p-2 rounded-lg text-white/90">
                  Sure! Transferring now.
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00FF66] flex items-center justify-center font-bold text-[8px] text-black">B</div>
              </div>
              <div className="bg-[#00FF66]/5 border border-[#00FF66]/10 p-2 rounded flex justify-between items-center text-[9px] text-[#00FF66] font-mono">
                <span>✕ Transfer Complete</span>
                <span>+150.00 XDC</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: OpenScan (Span 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#09090F]/90 border border-white/5 rounded-3xl p-6 flex flex-col justify-between card-hover relative overflow-hidden min-h-[380px]"
          >
            <div>
              <span className="text-[10px] text-[#00FF66] border border-[#00FF66]/20 bg-[#00FF66]/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                Developer Toolkit
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">OpenScan SDK</h3>
              <p className="text-xs text-white/50">
                Highly optimized open-source block explorer API client. Fetch records with minimal latency.
              </p>
            </div>

            {/* SDK code codeblock mockup */}
            <div className="bg-[#040408] border border-white/5 rounded-xl p-3 flex flex-col mt-4 font-mono text-[9px] text-white/40 h-32 overflow-hidden select-none">
              <div className="flex justify-between items-center text-white/20 pb-1 mb-1 border-b border-white/5">
                <span>client.js</span>
                <span>NodeJS</span>
              </div>
              <span className="text-[#00FF66] font-semibold">import <span className="text-white">OpenScan</span> from <span className="text-[#EC4899]">&apos;@openscan/sdk&apos;</span>;</span>
              <span className="mt-1 text-white/50">const client = new OpenScan(&#123;</span>
              <span className="text-white/60">&nbsp;&nbsp;network: &apos;xdc-mainnet&apos;,</span>
              <span className="text-white/60">&nbsp;&nbsp;apiKey: process.env.API_KEY</span>
              <span className="text-white/50">&#125;);</span>
              <span className="mt-1 text-white/30">{/* Fetch latest block height */}</span>
              <span className="text-white/60">const block = await client.getBlock();</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
