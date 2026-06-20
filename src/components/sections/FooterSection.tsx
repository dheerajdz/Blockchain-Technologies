'use client';

export default function FooterSection() {
  return (
    <section className="relative bg-[#020205] pt-24 pb-12 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FF66]/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="rounded-[32px] bg-[#0A0B0E]/95 border border-white/10 p-10 text-center shadow-[0_40px_120px_-50px_rgba(0,255,102,0.24)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#00FF66] font-semibold mb-4">Join the network</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">Ready to run a node?</h2>
          <p className="max-w-2xl mx-auto text-base text-white/60 leading-relaxed mb-10">
            Join thousands of validators helping to secure the XCHAIN ledger and build the next generation of blockchain applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#validators"
              className="inline-flex items-center justify-center rounded-full bg-[#00FF66] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_30px_rgba(0,255,102,0.18)] hover:bg-[#00FF66]/90 transition"
            >
              Run a Validator
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition"
            >
              Read the Whitepaper
            </a>
          </div>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-8 text-sm text-white/40">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#00FF66] to-[#7C3AED] flex items-center justify-center text-black font-bold">X</div>
              <div>
                <div className="font-semibold text-white">XCHAIN</div>
                <div className="text-xs text-white/50">Validator-owned blockchain</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {['Network', 'Security', 'Validators', 'Docs'].map((item) => (
                <a
                  key={item}
                  href={item === 'Docs' ? '#' : `#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-xs text-white/30">Demo design concept — not affiliated with any live network.</div>
        </footer>
      </div>
    </section>
  );
}
