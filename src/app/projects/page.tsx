'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── TYPES ─── */

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category?: string;
}

/* ─── DATA ─── */

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'XDCScan Explorer',
    description: 'Official XDC Network block explorer with real-time transaction tracking, smart contract verification, and advanced analytics dashboard serving 50K+ daily users.',
    technologies: ['Next.js', 'TypeScript', 'XDC', 'Tailwind'],
    image: '/projects/xdcscan.jpg',
    github: 'https://github.com/blocksscan/xdcscan',
    demo: 'https://xdcscan.io',
    category: 'Explorer',
  },
  {
    id: '2',
    title: 'OpenScan AI',
    description: 'AI-powered blockchain analytics platform with intelligent transaction monitoring, anomaly detection, and predictive insights for enterprise clients.',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    image: '/projects/openscan.jpg',
    github: 'https://github.com/blocksscan/openscan-ai',
    demo: 'https://openscan.ai',
    category: 'AI',
  },
  {
    id: '3',
    title: 'GCX Platform',
    description: 'Next-generation cross-chain interoperability protocol enabling seamless asset transfers and communication between heterogeneous blockchain networks.',
    technologies: ['Solidity', 'Node.js', 'Graph Protocol', 'Redis'],
    image: '/projects/gcx.jpg',
    github: 'https://github.com/blocksscan/gcx',
    category: 'Infrastructure',
  },
  {
    id: '4',
    title: 'XDCGram',
    description: 'Social messaging platform built on XDC Network with token incentives, encrypted messaging, and decentralized identity verification.',
    technologies: ['React Native', 'Firebase', 'XDC', 'WebRTC'],
    image: '/projects/xdcgram.jpg',
    demo: 'https://xdcgram.app',
    category: 'Social',
  },
  {
    id: '5',
    title: 'BlocksScan API',
    description: 'High-performance REST and GraphQL API suite for blockchain data access, supporting multiple networks with sub-100ms response times.',
    technologies: ['Node.js', 'GraphQL', 'Docker', 'Kubernetes'],
    image: '/projects/api.jpg',
    github: 'https://github.com/blocksscan/api',
    category: 'Infrastructure',
  },
  {
    id: '6',
    title: 'Smart Contract Library',
    description: 'Audited, open-source smart contract templates for common DeFi patterns including staking, vesting, and multi-sig wallets.',
    technologies: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Foundry'],
    image: '/projects/contracts.jpg',
    github: 'https://github.com/blocksscan/contracts',
    category: 'DeFi',
  },
];

const categories = ['All', 'Explorer', 'AI', 'Infrastructure', 'Social', 'DeFi'];

/* ─── COMPONENTS ─── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-accent-600/30 flex items-center justify-center">
            <span className="text-5xl font-heading font-bold text-accent-500/30">
              {project.title[0]}
            </span>
          </div>
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent flex items-end justify-between p-5"
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <span className="badge mb-3 inline-block">{project.category}</span>

        <h3 className="heading-3 text-white mb-2 group-hover:text-accent-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-300 text-xs font-medium border border-accent-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setProjects(data.data);
        }
      })
      .catch(() => {
        // Keep fallback projects
      });
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-accent-300"
          >
            Our Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Projects That{' '}
            <span className="gradient-text">Define Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            Explore our portfolio of blockchain solutions — from explorers and AI analytics
            to cross-chain protocols and social platforms.
          </motion.p>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-500 text-white shadow-[0_0_16px_rgba(42,70,139,0.3)]'
                    : 'bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#A1A1AA] text-lg">No projects in this category yet.</p>
            </motion.div>
          )}
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
            Have a Project in <span className="gradient-text">Mind</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A1A1AA] body-md max-w-xl mx-auto mb-8"
          >
            We love collaborating on innovative blockchain ideas. Let&apos;s discuss how we can bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="/services" className="btn btn-outline">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
