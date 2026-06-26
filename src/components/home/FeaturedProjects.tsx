'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Globe, Bot, Blocks, MessageSquare, FileCode, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  link?: string;
}

// Icon mapping for project placeholders
const projectIcons: Record<string, React.ElementType> = {
  'XDCScan Explorer': Globe,
  'OpenScan AI': Bot,
  'GCX Platform': Blocks,
  'XDCGram': MessageSquare,
};

function getProjectIcon(title: string) {
  return projectIcons[title] || FileCode;
}

// Fallback static projects
const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'XDCScan Explorer',
    description: 'Official XDC Network block explorer with real-time transaction tracking, smart contract verification, and advanced analytics dashboard.',
    technologies: ['Next.js', 'TypeScript', 'XDC'],
    image: '/projects/xdcscan.jpg',
    featured: true,
    link: '#',
  },
  {
    id: '2',
    title: 'OpenScan AI',
    description: 'AI-powered blockchain analytics platform with intelligent transaction monitoring and predictive insights.',
    technologies: ['React', 'Python', 'AI'],
    image: '/projects/openscan.jpg',
    link: '#',
  },
  {
    id: '3',
    title: 'GCX Platform',
    description: 'Next-generation cross-chain interoperability protocol enabling seamless asset transfers across networks.',
    technologies: ['Solidity', 'Node.js', 'Graph'],
    image: '/projects/gcx.jpg',
    link: '#',
  },
  {
    id: '4',
    title: 'XDCGram',
    description: 'Social messaging platform built on XDC Network with token incentives and community features.',
    technologies: ['React Native', 'Firebase', 'XDC'],
    image: '/projects/xdcgram.jpg',
    link: '#',
  },
];

function ProjectPlaceholder({ title }: { title: string }) {
  const Icon = getProjectIcon(title);
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#2A468B] to-[#4C6FC2] flex items-center justify-center">
      <Icon className="h-12 w-12 text-white/80" strokeWidth={1.5} />
    </div>
  );
}

function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasValidImage = project.image && project.image.length > 0 && !imageError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card-light overflow-hidden group cursor-pointer ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
        <motion.div
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          {hasValidImage ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onError={() => setImageError(true)}
                onLoad={() => setImageLoaded(true)}
                sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              />
              {!imageLoaded && <ProjectPlaceholder title={project.title} />}
            </>
          ) : (
            <ProjectPlaceholder title={project.title} />
          )}
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#2A468B] text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={`font-semibold text-[#18181B] mb-2 ${featured ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <p className={`text-[#52525B] mb-4 ${featured ? 'text-sm' : 'text-xs'}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-[#4C6FC2]/10 text-[#2A468B] text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project link */}
        <div className="pt-3 border-t border-black/5">
          <a
            href={project.link || '#'}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2A468B] hover:text-[#4C6FC2] transition-colors group/link"
          >
            View Project
            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch from API, fallback to static on error
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setProjects(data.data);
        }
      })
      .catch(() => {
        // Keep fallback projects
      })
      .finally(() => setLoading(false));
  }, []);

  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block"
          >
            Featured Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-4"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#52525B] body-md max-w-2xl mx-auto"
          >
            Explore our portfolio of blockchain solutions that are shaping the future of decentralized technology.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard project={featured} index={0} featured />
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
