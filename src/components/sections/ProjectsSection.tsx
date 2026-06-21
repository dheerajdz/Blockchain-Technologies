"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "xblockchain",
    title: "xblockchain",
    tagline: "Private Proof-of-Stake Networks",
    description: "Launch customizable, secure private blockchain networks with Geth, Reth, and Nethermind client diversity from a single control plane.",
    tech: ["Geth", "Reth", "Nethermind", "Prysm", "Lighthouse"],
    outcome: "99.99% uptime validation, heterogeneous client setups under 5 minutes.",
    demoUrl: "#",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 01-2 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-2xl border border-white/5 overflow-hidden p-6">
        <div className="absolute w-48 h-48 rounded-full border border-dashed border-[#1B4FD8]/20 animate-spin" style={{ animationDuration: '40s' }} />
        <div className="absolute w-32 h-32 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B4FD8] to-[#1E3A8A] flex items-center justify-center shadow-glow-sm">
          <span className="font-heading font-black text-xs text-white">PoS</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-[#0F0F0F]/90 border border-white/10 rounded-lg p-3 font-mono text-[9px] text-[#A0A0A0]">
          <div className="text-[#1B4FD8]">$ xblockchain init</div>
          <div>✓ Nodes active: 4 validators</div>
        </div>
      </div>
    ),
  },
  {
    id: "gcx",
    title: "GCX Swap",
    tagline: "Cross-Chain Liquidity Routing",
    description: "Route cross-chain liquidity with zero-latency quote checks, low slippage routing, and Gas-aware transaction queuing.",
    tech: ["Fastify", "Next.js", "Prisma", "TypeScript", "Tailwind"],
    outcome: "Average exchange latency of 12ms, 0.10% slippage route control.",
    demoUrl: "#",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex flex-col justify-between bg-black/50 rounded-2xl border border-white/5 p-5">
        <div className="flex items-center justify-between text-[10px] text-white/40">
          <span>GCX LIQUIDITY SWAP</span>
          <span className="text-[#1B4FD8] font-semibold">Active Route</span>
        </div>
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="bg-white/5 border border-white/5 rounded-xl p-3">
            <span className="text-[9px] text-white/30">From</span>
            <div className="text-sm font-mono font-bold mt-1 text-white">1.0 ETH</div>
          </div>
          <div className="bg-[#1B4FD8]/5 border border-[#1B4FD8]/10 rounded-xl p-3">
            <span className="text-[9px] text-[#1B4FD8]/70">To</span>
            <div className="text-sm font-mono font-bold mt-1 text-white">3,240 XDC</div>
          </div>
        </div>
        <div className="h-16 flex items-end gap-1 px-2 pb-1 bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden">
          {[20, 45, 30, 60, 50, 70, 40, 85, 90, 65].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-[#1E3A8A] to-[#1B4FD8]" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai-smart",
    title: "AI-Smart Explorer",
    tagline: "Natural Language Smart Contract Audit",
    description: "Scan onchain bytecode, smart contract logic paths, and transaction telemetry with plain-language contract diagnostics.",
    tech: ["Python", "TensorFlow", "FastAPI", "Web3.py", "React"],
    outcome: "Identifies reentrancy and overflows in 1.4 seconds with 94.6% accuracy.",
    demoUrl: "#",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex flex-col justify-between bg-black/50 rounded-2xl border border-white/5 p-5 font-mono text-[9px] text-[#A0A0A0]">
        <div className="text-white/45">// AI contract scanner</div>
        <div className="bg-[#080808] border border-white/10 rounded p-3 my-4 space-y-1">
          <div className="text-[#1B4FD8]">$ scan --target 0x5a3f...</div>
          <div>[Analyzing bytecode loops...]</div>
          <div className="text-[#FF4D4D]">⚠️ Warning: Reentrancy found in withdraw()</div>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span>Security Score:</span>
          <span className="text-[#FF4D4D] font-bold">D+ (Critical)</span>
        </div>
      </div>
    ),
  },
  {
    id: "xdcgram",
    title: "XDCGram",
    tagline: "Decentralized Social Messaging",
    description: "Multi-layered encrypted social messaging framework deployed directly onto XDC subnet ledger paths for immutable communications.",
    tech: ["Rust", "XDC Subnets", "WebRTC", "WASM", "SQLite"],
    outcome: "End-to-end messaging latency under 50ms, metadata-hidden routing.",
    demoUrl: "#",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex flex-col justify-between bg-black/50 rounded-2xl border border-white/5 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#1B4FD8]" />
          <span className="text-[10px] text-white/50">XDCGram Secure Node</span>
        </div>
        <div className="space-y-2 flex-grow flex flex-col justify-center font-body">
          <div className="bg-white/5 rounded-lg p-2 max-w-[80%] text-[10px] text-white self-start">
            Hello, transaction hash?
          </div>
          <div className="bg-[#1B4FD8]/10 border border-[#1B4FD8]/20 rounded-lg p-2 max-w-[80%] text-[10px] text-[#1B4FD8] self-end">
            0x89c2... verified!
          </div>
        </div>
        <div className="mt-4 text-[9px] text-white/30 text-right font-mono">
          Handshake: ECDH-25519
        </div>
      </div>
    ),
  },
  {
    id: "openscan",
    title: "OpenScan Client",
    tagline: "High-Performance Indexer SDK",
    description: "Query blocks, account ledgers, event logs, and smart contract state traces through a developer-first typed client.",
    tech: ["TypeScript", "gRPC", "WebSockets", "Rust", "Docker"],
    outcome: "Processes 50k+ logs/sec, 100% typed output, integrated mock server.",
    demoUrl: "#",
    icon: (
      <svg className="w-6 h-6 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex flex-col justify-between bg-black/50 rounded-2xl border border-white/5 p-5 font-mono text-[9px] text-[#A0A0A0]">
        <div className="text-white/30">// OpenScan API wrapper</div>
        <div className="bg-black/60 border border-white/10 rounded-lg p-3 my-3">
          <span className="text-[#1B4FD8]">const</span> client = new OpenScanClient(&apos;mainnet&apos;);
          <br />
          <span className="text-[#1B4FD8]">const</span> logs = <span className="text-blue-400">await</span> client.getLogs(&apos;0x89d2&apos;);
        </div>
        <div className="text-[#1B4FD8] text-right text-[10px] font-semibold">
          [Logs loaded: 142]
        </div>
      </div>
    ),
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative bg-bg-base py-28 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1B4FD8]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 font-body">
          <span className="text-[#1B4FD8] font-mono text-sm tracking-widest uppercase mb-4 block font-semibold">
            Product Portfolio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Take a look at the key technologies built by the BlocksScan engineering team. 
            Select a project below to preview its interface and visual telemetry.
          </p>
        </div>

        {/* Layout: Sidebar + Visual Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-body">
          {/* Projects List (Left side) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {projects.map((project) => {
              const isActive = project.id === activeProject.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                    isActive
                      ? "bg-white/[0.03] border-[#1B4FD8]/30 shadow-glow-sm"
                      : "bg-[#141414]/40 border-white/[0.04] hover:bg-[#141414]/80 hover:border-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive ? "bg-[#1B4FD8]/10 border border-[#1B4FD8]/30" : "bg-white/5 border border-white/10"
                  }`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white mb-0.5">
                      {project.title}
                    </h3>
                    <p className="font-body text-[11px] text-text-secondary">
                      {project.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Project Details Visual Panel (Right side) */}
          <div className="lg:col-span-7">
            <div className="card p-8 h-full flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full justify-between gap-8"
                >
                  {/* Text Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">
                        Featured Project
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="text-[11px] text-text-muted font-mono">
                        {activeProject.id}.blocksscan.io
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl font-bold text-white mb-4">
                      {activeProject.title}
                    </h3>
                    <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                      {activeProject.description}
                    </p>

                    {/* Tech & Outcome */}
                    <div className="space-y-4 font-body">
                      <div>
                        <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-text-muted block mb-2">
                          Technologies Used
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.tech.map((t) => (
                            <span key={t} className="badge badge-gray font-mono font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-text-muted block mb-2">
                          Core Outcome
                        </span>
                        <p className="text-xs text-white/90 font-mono flex items-center gap-2 font-semibold">
                          <span className="w-1.5 h-1.5 bg-[#1B4FD8] rounded-full animate-ping" />
                          {activeProject.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Mockup Container */}
                  <div className="relative aspect-video max-w-lg mx-auto w-full mt-6 bg-[#080808] border border-white/5 rounded-2xl p-4 shadow-glow-sm">
                    {activeProject.visual}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}  );
}
