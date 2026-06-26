'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Globe, Bot, Blocks, MessageSquare, FileCode, LayoutGrid } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── TYPES ─── */

interface Project {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  technologies?: string[];
  image?: string;
  github?: string;
  demo?: string;
  category?: string;
  link?: string;
}

/* ─── DATA ─── */

const categories = ['All', 'Explorer', 'AI', 'Infrastructure', 'Social', 'DeFi'];

/* ─── COMPONENTS ─── */

const projectIcons: Record<string, React.ElementType> = {
  'XDCScan Explorer': Globe,
  'OpenScan AI': Bot,
  'GCX Platform': Blocks,
  'XDCGram': MessageSquare,
  'BlocksScan API': LayoutGrid,
  'Smart Contract Library': FileCode,
};

function getProjectIcon(title: string) {
  return projectIcons[title] || FileCode;
}

function ProjectPlaceholder({ title }: { title: string }) {
  const Icon = getProjectIcon(title);
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent-500/30 to-accent-600/40 flex items-center justify-center">
      <Icon className="h-12 w-12 text-accent-300/60" strokeWidth={1.5} />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasValidImage = !!project.image && project.image.length > 0 && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card overflow-hidden group cursor-pointer h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <motion.div
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          {hasValidImage ? (
            <>
              <Image
                src={project.image || '/projects/placeholder.svg'}
                alt={project.title}
                fill
                className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onError={() => setImageError(true)}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {!imageLoaded && <ProjectPlaceholder title={project.title} />}
            </>
          ) : (
            <ProjectPlaceholder title={project.title} />
          )}
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
      <div className="p-6 flex flex-col flex-grow">
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
          {project.technologies?.map((tech) => (
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
  const [projects, setProjects] = useState<Project[]>([]);
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
                    ? 'bg-accent-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]'
                    : 'bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project._id || project.id || i} project={project} index={i} />
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
