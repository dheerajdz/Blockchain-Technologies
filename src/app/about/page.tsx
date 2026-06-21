'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Target, Eye, Zap, Shield, Users, Rocket } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── DATA ─── */

const coreValues = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with blockchain technology, constantly exploring new paradigms and solutions.',
    icon: Zap,
  },
  {
    title: 'Security by Design',
    description: 'Every solution we build prioritizes security at the architectural level, ensuring robust protection for our clients.',
    icon: Shield,
  },
  {
    title: 'Collaborative Spirit',
    description: 'We believe the best outcomes emerge from diverse teams working together with transparency and mutual respect.',
    icon: Users,
  },
  {
    title: 'Relentless Execution',
    description: 'From concept to deployment, we maintain a bias for action and deliver results that exceed expectations.',
    icon: Rocket,
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Founded in Mumbai',
    description: 'BlocksScan Technologies was established with a vision to make blockchain accessible and useful for enterprises.',
  },
  {
    year: '2020',
    title: 'XDCScan Launch',
    description: 'Launched our first blockchain explorer for the XDC Network, providing real-time transaction visibility.',
  },
  {
    year: '2021',
    title: 'OpenScan AI Platform',
    description: 'Introduced AI-powered analytics to blockchain data, enabling intelligent insights and pattern recognition.',
  },
  {
    year: '2022',
    title: 'GCX Ecosystem',
    description: 'Built the GCX platform — a comprehensive blockchain infrastructure suite for enterprise clients.',
  },
  {
    year: '2023',
    title: 'XDCGram Social Layer',
    description: 'Launched XDCGram, bringing social connectivity and community features to the XDC ecosystem.',
  },
  {
    year: '2024',
    title: 'AI-Smart Explorer',
    description: 'Released our next-generation AI-Smart Explorer with natural language querying and predictive analytics.',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Expanded operations to serve enterprise clients across APAC, Europe, and North America.',
  },
];

/* ─── COMPONENTS ─── */

function ValueCard({ value, index }: { value: typeof coreValues[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card p-6 md:p-8 cursor-default group"
    >
      {/* Icon Badge */}
      <motion.div
        animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mb-5"
      >
        <Icon
          className="h-6 w-6 text-accent-300"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Title */}
      <h3 className="heading-3 text-white mb-3 group-hover:text-accent-300 transition-colors">
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-[#A1A1AA] text-sm leading-relaxed">
        {value.description}
      </p>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(400px circle at 50% 50%, rgba(42, 70, 139, 0.06), transparent 60%)',
        }}
      />
    </motion.div>
  );
}

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-8 md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
        <div className="card p-6 md:p-8 inline-block w-full md:w-auto">
          <span className="label text-accent-300 mb-2 inline-block">{milestone.year}</span>
          <h3 className="heading-3 text-white mb-2">{milestone.title}</h3>
          <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-md">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Center Node */}
      <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-accent-500 border-2 border-accent-300 z-10 shadow-[0_0_12px_rgba(42,70,139,0.5)]" />

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-accent-300"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Building the Future of{' '}
            <span className="gradient-text">Decentralized Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            BlocksScan Technologies is a pioneering blockchain development company 
            headquartered in Mumbai, dedicated to building innovative solutions that 
            bridge the gap between complex decentralized technology and real-world utility.
          </motion.p>
        </div>
      </section>

      {/* ─── COMPANY OVERVIEW ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="label mb-4 inline-block text-accent-300"
              >
                Who We Are
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="heading-1 mb-6"
              >
                Pioneering Blockchain Innovation Since <span className="gradient-text">2019</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#A1A1AA] body-md mb-6"
              >
                Founded in Mumbai, BlocksScan Technologies has grown from a small team of 
                blockchain enthusiasts into a global technology partner for enterprises seeking 
                to leverage decentralized solutions. We specialize in building blockchain explorers, 
                smart contract platforms, and AI-integrated Web3 applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#A1A1AA] body-md"
              >
                Our products — XDCScan, OpenScan AI, GCX, and XDCGram — serve thousands of 
                users daily across the XDC Network ecosystem and beyond. We believe in making 
                blockchain technology accessible, secure, and genuinely useful for businesses 
                and individuals alike.
              </motion.p>
            </div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '6+', label: 'Years of Experience' },
                { value: '4', label: 'Core Products' },
                { value: '50K+', label: 'Daily Users' },
                { value: '14', label: 'Team Members' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-300 mb-2">{stat.value}</div>
                  <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card p-8 md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
                <Target className="h-6 w-6 text-accent-300" strokeWidth={1.5} />
              </div>
              <span className="label text-accent-300 mb-3 inline-block">Our Mission</span>
              <h3 className="heading-2 mb-4">Democratize Blockchain Access</h3>
              <p className="text-[#A1A1AA] body-md leading-relaxed">
                To build intuitive, powerful tools that make blockchain technology accessible 
                to everyone — from developers and enterprises to everyday users. We strive to 
                remove complexity barriers and create seamless experiences that unlock the 
                full potential of decentralized systems.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="card p-8 md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
                <Eye className="h-6 w-6 text-accent-300" strokeWidth={1.5} />
              </div>
              <span className="label text-accent-300 mb-3 inline-block">Our Vision</span>
              <h3 className="heading-2 mb-4">A Connected Decentralized World</h3>
              <p className="text-[#A1A1AA] body-md leading-relaxed">
                We envision a future where blockchain is the invisible backbone of digital 
                trust — powering transparent supply chains, fair financial systems, and 
                user-owned data. BlocksScan aims to be the leading infrastructure provider 
                for this decentralized future, starting with the XDC ecosystem and expanding globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label mb-4 inline-block text-accent-300"
            >
              What Drives Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-1 mb-4"
            >
              Our Core <span className="gradient-text">Values</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#A1A1AA] body-md max-w-2xl mx-auto"
            >
              The principles that guide every decision we make and every product we build.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANY JOURNEY (TIMELINE) ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label mb-4 inline-block text-accent-300"
            >
              Our Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-1 mb-4"
            >
              From <span className="gradient-text">Startup</span> to Scale
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#A1A1AA] body-md max-w-2xl mx-auto"
            >
              The milestones that shaped BlocksScan into what it is today.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent transform -translate-x-1/2 hidden md:block" />

            {/* Mobile Line */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent md:hidden" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, i) => (
                <TimelineItem key={milestone.year} milestone={milestone} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section cta-glow">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-1 mb-6"
          >
            Want to Join Our <span className="gradient-text">Journey</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A1A1AA] body-md max-w-xl mx-auto mb-8"
          >
            We&apos;re always looking for passionate individuals who believe in the 
            power of decentralized technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/careers" className="btn btn-primary">
              View Open Positions
            </a>
            <a href="/contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
