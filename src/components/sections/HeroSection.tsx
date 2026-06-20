'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Helper to generate mock transaction hash
const genHash = () => '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 16).toString(16)).join('') + '...' + Array.from({ length: 6 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

interface Block {
  height: number;
  txCount: number;
  time: string;
}

interface Tx {
  hash: string;
  from: string;
  to: string;
  value: string;
}

export default function HeroSection() {
  const [blockHeight, setBlockHeight] = useState(45920103);
  const [tps, setTps] = useState(2450);
  const [recentBlocks, setRecentBlocks] = useState<Block[]>([
    { height: 45920103, txCount: 184, time: 'Just now' },
    { height: 45920102, txCount: 201, time: '2s ago' },
    { height: 45920101, txCount: 142, time: '4s ago' },
  ]);
  const [recentTxs, setRecentTxs] = useState<Tx[]>([
    { hash: '0x3f5c...9a12', from: '0x8922...bf41', to: '0x10d3...88ea', value: '4.50 XDC' },
    { hash: '0xa411...09e1', from: '0xbc33...e4f9', to: '0x712a...77b1', value: '0.12 ETH' },
    { hash: '0x99a2...ee43', from: '0x00d2...ee11', to: '0x55d1...2390', value: '1,200 USDT' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment block height
      setBlockHeight(prev => prev + 1);
      
      // Randomize TPS slightly
      setTps(Math.floor(2200 + Math.random() * 500));
      
      // Update blocks list
      setRecentBlocks(prev => [
        { height: prev[0].height + 1, txCount: Math.floor(100 + Math.random() * 150), time: 'Just now' },
        { height: prev[0].height, txCount: prev[0].txCount, time: '2s ago' },
        { height: prev[1].height, txCount: prev[1].txCount, time: '4s ago' },
      ]);

      // Update tx list
      setRecentTxs(prev => [
        { 
          hash: genHash(), 
          from: genHash(), 
          to: genHash(), 
          value: `${(Math.random() * 5).toFixed(2)} XDC` 
        },
        prev[0],
        prev[1]
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#020205] pt-36 pb-20 px-6 noise-overlay">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-purple opacity-20 pointer-events-none" />

      {/* Floating Glowing Orbs (Novix Style) */}
      <motion.div
        className="absolute top-1/6 left-1/10 w-[400px] h-[400px] bg-[#00FF66]/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/10 w-[450px] h-[450px] bg-[#7C3AED]/15 rounded-full blur-[130px] pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-[#EC4899]/10 rounded-full blur-[110px] pointer-events-none"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full flex flex-col items-center">
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#2BD9A8] shadow-[0_0_15px_rgba(43,217,168,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2BD9A8] animate-pulse" />
            Validator-owned network
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none max-w-5xl mb-6 text-white"
        >
          The Validator-Owned<br />
          <span className="gradient-text">Blockchain</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-3xl mb-10 leading-relaxed font-medium"
        >
          XCHAIN is a proof-of-stake network secured by independent validators — fast finality, low fees, and no single company in control of the ledger.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#ecosystem"
            className="group px-8 py-4 bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-extrabold uppercase tracking-wider text-xs rounded-full shadow-[0_0_25px_rgba(0,255,102,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Ecosystem
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#stats"
            className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-extrabold uppercase tracking-wider text-xs rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
          >
            Network Stats
          </a>
        </motion.div>

        {/* Interactive Dashboard Mockup (Visual Highlight) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto rounded-2xl bg-[#09090F]/80 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden p-1 sm:p-2.5 relative group"
        >
          {/* Subtle Glowing borders */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF66]/5 via-transparent to-[#7C3AED]/10 opacity-60 pointer-events-none rounded-2xl" />
          
          <div className="rounded-xl bg-[#020205] border border-white/5 overflow-hidden flex flex-col md:flex-row text-left font-sans h-[480px]">
            {/* Sidebar Mock */}
            <div className="hidden md:flex flex-col w-16 bg-[#07070D] border-r border-white/5 items-center py-6 gap-6">
              <div className="w-8 h-8 rounded bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
              </div>
              {['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'].map((path, index) => (
                <div key={index} className="w-8 h-8 rounded flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} /></svg>
                </div>
              ))}
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 flex flex-col bg-[#040408]">
              {/* Top Header Mock */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3 w-1/2">
                  <div className="text-white/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <input
                    type="text"
                    disabled
                    placeholder="Search blocks, txs, accounts..."
                    className="bg-transparent border-none text-xs text-white/40 focus:outline-none w-full"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#00FF66] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]/20 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#00FF66] animate-pulse" />
                    </span>
                    Mainnet
                  </span>
                  <span className="text-white/40">Gas: <strong className="text-white/80">14 Gwei</strong></span>
                </div>
              </div>

              {/* Live metrics widgets */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {[
                  { title: 'Block Height', value: blockHeight.toLocaleString(), change: '+1', color: 'text-[#00FF66]' },
                  { title: 'Transactions / Sec', value: `${tps} tps`, change: 'Optimal', color: 'text-[#00FF66]' },
                  { title: 'Validators Count', value: '4,520', change: '100% active', color: 'text-[#7C3AED]' },
                  { title: 'Network Load', value: '18.42%', change: 'Low Latency', color: 'text-white' },
                ].map((item, index) => (
                  <div key={index} className="bg-[#07070D] border border-white/5 rounded-xl p-4 flex flex-col gap-1.5 shadow-lg">
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">{item.title}</span>
                    <span className={`text-lg font-bold font-mono tracking-tight ${item.color}`}>{item.value}</span>
                    <span className="text-[10px] text-[#00FF66] font-semibold">{item.change}</span>
                  </div>
                ))}
              </div>

              {/* Lower Section (Chart + Feeds) */}
              <div className="flex-1 grid lg:grid-cols-3 gap-6 px-6 pb-6 overflow-hidden">
                {/* SVG Live Chart Mockup */}
                <div className="lg:col-span-2 bg-[#07070D] border border-white/5 rounded-xl p-4 flex flex-col h-full">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-2">Live Transaction Volume (1h)</span>
                  <div className="flex-1 w-full relative min-h-[140px] flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 400 150">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00FF66" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#00FF66" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.02)" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.02)" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.02)" />
                      
                      {/* Line */}
                      <path
                        d="M 0,110 Q 50,60 100,100 T 200,40 T 300,90 T 400,30"
                        fill="none"
                        stroke="#00FF66"
                        strokeWidth="2.5"
                      />
                      {/* Gradient Fill */}
                      <path
                        d="M 0,110 Q 50,60 100,100 T 200,40 T 300,90 T 400,30 L 400,150 L 0,150 Z"
                        fill="url(#chartGrad)"
                      />
                      
                      {/* Orbit points */}
                      <circle cx="200" cy="40" r="4" fill="#00FF66" className="animate-pulse" />
                      <circle cx="400" cy="30" r="4" fill="#00FF66" />
                    </svg>
                  </div>
                </div>

                {/* Live Block Feed */}
                <div className="bg-[#07070D] border border-white/5 rounded-xl p-4 flex flex-col h-full overflow-hidden">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-3">Live Feed</span>
                  <div className="flex flex-col gap-2.5 overflow-hidden">
                    {recentBlocks.map((block) => (
                      <div key={block.height} className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0 text-xs">
                        <div className="flex flex-col">
                          <span className="font-mono text-white font-bold">Block #{block.height}</span>
                          <span className="text-[10px] text-white/40">{block.txCount} txs</span>
                        </div>
                        <span className="text-[#00FF66] font-semibold text-[10px]">{block.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Downward gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none" />
    </section>
  );
}
