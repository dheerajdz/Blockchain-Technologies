'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section
      id="contact"
      className="relative bg-[#020205] noise-overlay overflow-hidden pt-28 pb-12 px-6"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      {/* Floating Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#00FF66]/10 rounded-full blur-[110px] pointer-events-none"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[110px] pointer-events-none"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Central CTA Card */}
      <div className="relative z-10 max-w-5xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#09090F]/90 border border-white/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF66]/5 via-transparent to-[#7C3AED]/5 pointer-events-none" />
          
          <span className="text-[#00FF66] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-4 block font-bold">
            Get Started Now
          </span>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Ready to build <br className="hidden sm:block" />
            the <span className="gradient-text">Decentralized Future?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-white/50 mb-10 max-w-xl">
            Join thousands of developers launching custom PoS networks, swap portals, 
            and audited contracts with BlocksScan.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:contact@blocksscan.io"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-extrabold uppercase tracking-wider text-xs rounded-full shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Building Free
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-extrabold uppercase tracking-wider text-xs rounded-full transition-all duration-300 active:scale-95"
            >
              View API Options
            </a>
          </div>
        </motion.div>
      </div>

      {/* Newsletter signup & footer sitemap */}
      <div className="relative z-10 max-w-6xl mx-auto border-t border-white/10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-20 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF66] to-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                <span className="text-black font-extrabold text-sm">B</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                BlocksScan
              </span>
            </a>
            <p className="text-xs text-white/45 leading-relaxed max-w-xs font-medium">
              Constructing immersive blockchain architectures. We build tools that make 
              decentralized ecosystems transparent, secure, and accessible since 2019.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-[#00FF66] transition-colors duration-300 text-xs font-semibold uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-4">
            {/* Products */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-[#00FF66] uppercase font-extrabold tracking-widest">Products</span>
              <div className="flex flex-col gap-2.5 text-xs text-white/50 font-medium">
                <a href="#ecosystem" className="hover:text-white transition-colors duration-300">xblockchain</a>
                <a href="#ecosystem" className="hover:text-white transition-colors duration-300">GCX Terminal</a>
                <a href="#ecosystem" className="hover:text-white transition-colors duration-300">AI Explorer</a>
                <a href="#ecosystem" className="hover:text-white transition-colors duration-300">XDCGram Chat</a>
                <a href="#ecosystem" className="hover:text-white transition-colors duration-300">OpenScan SDK</a>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-[#7C3AED] uppercase font-extrabold tracking-widest">Company</span>
              <div className="flex flex-col gap-2.5 text-xs text-white/50 font-medium">
                <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
                <a href="#stats" className="hover:text-white transition-colors duration-300">Network Stats</a>
                <a href="#pricing" className="hover:text-white transition-colors duration-300">Developer API</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Open Careers</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Press Kit</a>
              </div>
            </div>

            {/* Newsletter form */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-white/80 uppercase font-extrabold tracking-widest">Stay Updated</span>
              <p className="text-[11px] text-white/45 leading-relaxed font-medium">
                Subscribe to our validator updates and releases newsletters.
              </p>
              
              {subscribed ? (
                <div className="text-[11px] text-[#00FF66] font-semibold font-mono bg-[#00FF66]/5 border border-[#00FF66]/10 p-2.5 rounded-lg">
                  ✓ Successfully Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="mail@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/5 rounded-full px-3.5 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00FF66]/30 flex-1 min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black font-extrabold text-[10px] uppercase rounded-full hover:bg-[#00FF66] transition-colors shadow-md"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8 text-[11px] text-white/30 font-medium">
          <div>
            © 2026 BlocksScan Technologies. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </section>
  );
}
