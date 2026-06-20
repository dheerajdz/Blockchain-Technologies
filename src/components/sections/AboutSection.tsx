'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D4AA] font-mono text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Building the Future of
              <span className="gradient-text block mt-2">Blockchain</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Founded in 2019 in Mumbai, BlocksScan Technologies is on a mission to
              democratize blockchain access. We don't just build tools — we craft
              experiences that make decentralized technology accessible to everyone.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { value: '2019', label: 'Founded' },
              { value: '50+', label: 'Team Members' },
              { value: '5', label: 'Products' },
              { value: '1M+', label: 'Users Served' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mission Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                title: 'Innovation',
                description: 'Pushing the boundaries of what blockchain technology can do.',
                icon: '💡',
              },
              {
                title: 'Transparency',
                description: 'Making blockchain data accessible and understandable for all.',
                icon: '🔍',
              },
              {
                title: 'Community',
                description: 'Building tools that empower developers and users alike.',
                icon: '🤝',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
