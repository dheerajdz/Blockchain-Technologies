'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const fallbackTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Dheeraj',
    role: 'Founder & CEO',
    image: '/team/dheeraj.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Team Member',
    role: 'Lead Developer',
    image: '/team/lead.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Team Member',
    role: 'Blockchain Engineer',
    image: '/team/blockchain.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Team Member',
    role: 'UI/UX Designer',
    image: '/team/designer.jpg',
    linkedin: 'https://linkedin.com',
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card overflow-hidden group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-[#4C6FC2]/10 to-[#1A2F5C]/20 flex items-center justify-center">
            <span className="text-4xl font-heading font-bold text-[#4C6FC2]/30">
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
              initial={{ y: 20, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-10 h-10 rounded-full bg-[#4C6FC2]/20 border border-[#4C6FC2]/30 flex items-center justify-center hover:bg-[#4C6FC2]/30 transition-colors"
            >
              <svg className="w-5 h-5 text-[#4C6FC2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
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

export default function TeamPreview() {
  const [team, setTeam] = useState<TeamMember[]>(fallbackTeam);

  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setTeam(data.data);
        }
      })
      .catch(() => {
        // Keep fallback team
      });
  }, []);

  return (
    <section id="team" className="section bg-[#0A0A0A]">
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
            Our Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-4"
          >
            Meet the <span className="gradient-text">Minds</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-md max-w-2xl mx-auto"
          >
            A passionate team of blockchain developers, designers, and innovators building the future.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
