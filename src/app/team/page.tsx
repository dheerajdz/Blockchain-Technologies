'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── TYPES ─── */

interface TeamMember {
  _id?: string;
  id?: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  category?: 'leadership' | 'core' | 'intern';
  order?: number;
}

/* ─── DATA ─── */

const categoryLabels: Record<string, { title: string; subtitle: string }> = {
  leadership: { title: 'Leadership', subtitle: 'The visionaries steering BlocksScan forward.' },
  core: { title: 'Core Team', subtitle: 'The builders, engineers, and designers making it happen.' },
  intern: { title: 'Interns', subtitle: 'Rising talent contributing fresh perspectives.' },
};

/* ─── COMPONENTS ─── */

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
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
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <motion.div
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-500/10 to-accent-600/20 flex items-center justify-center">
            <span className="text-5xl font-heading font-bold text-accent-500/30">
              {member.name[0]}
            </span>
          </div>
        </motion.div>

        {/* LinkedIn Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent flex items-end justify-center pb-6"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              initial={{ y: 20, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-300 hover:bg-accent-500/30 transition-colors"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="font-semibold text-white mb-1">{member.name}</h3>
        <p className="text-[#A1A1AA] text-sm">{member.role}</p>
      </div>
    </motion.div>
  );
}

function TeamSection({ category, members, startIndex }: { category: string; members: TeamMember[]; startIndex: number }) {
  const label = categoryLabels[category];
  if (!label || members.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span className="label text-accent-300 mb-2 inline-block">{label.title}</span>
        <p className="text-[#A1A1AA] text-sm">{label.subtitle}</p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <TeamCard key={member._id || member.id || i} member={member} index={startIndex + i} />
        ))}
      </div>
    </div>
  );
}

/* ─── PAGE ─── */

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          // Map API data to TeamMember format with fallback category
          const mappedMembers: TeamMember[] = data.data.map((m: any) => ({
            _id: m._id,
            id: m._id || m.id,
            name: m.name,
            role: m.role,
            bio: m.bio,
            image: m.image,
            linkedin: m.linkedin,
            category: m.category || 'core', // Default to 'core' if no category
            order: m.order,
          }));
          setTeam(mappedMembers);
        }
      })
      .catch(() => {
        // Keep fallback team
      });
  }, []);

  const leadership = team.filter((m) => m.category === 'leadership');
  const core = team.filter((m) => m.category === 'core');
  const interns = team.filter((m) => m.category === 'intern');

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
            Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Meet the{' '}
            <span className="gradient-text">Minds</span> Behind BlocksScan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            A passionate collective of blockchain developers, designers, and innovators
            united by a shared vision of decentralized technology.
          </motion.p>
        </div>
      </section>

      {/* ─── TEAM SECTIONS ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <TeamSection category="leadership" members={leadership} startIndex={0} />
          <TeamSection category="core" members={core} startIndex={leadership.length} />
          <TeamSection category="intern" members={interns} startIndex={leadership.length + core.length} />
        </div>
      </section>

      {/* ─── JOIN CTA ─── */}
      <section className="section cta-glow">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-1 mb-6"
          >
            Want to Join Our <span className="gradient-text">Team</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A1A1AA] body-md max-w-xl mx-auto mb-8"
          >
            We&apos;re always looking for talented individuals who are passionate about blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="/careers" className="btn btn-primary">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
