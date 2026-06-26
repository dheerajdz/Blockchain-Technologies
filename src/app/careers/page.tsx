'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Clock, Briefcase, GraduationCap, ArrowRight, Mail } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── DATA ─── */

interface Job {
  _id?: string;
  id?: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
}

const departments = ['All', 'Engineering', 'Design', 'Infrastructure', 'Growth'];
const types = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

/* ─── COMPONENTS ─── */

function JobCard({ job, index }: { job: Job; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card overflow-hidden"
    >
      {/* Header */}
      <div
        className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="badge">{job.department}</span>
            <span className={`badge ${job.type === 'Internship' ? 'bg-accent-500/20 text-accent-300' : ''}`}>
              {job.type}
            </span>
          </div>
          <h3 className="heading-3 text-white mb-2">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#A1A1AA]">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ArrowRight className="h-5 w-5 text-accent-300" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[#1E1E1E]">
          {/* Description */}
          <p className="text-[#A1A1AA] text-sm leading-relaxed mt-6 mb-6">
            {job.description}
          </p>

          {/* Requirements */}
          <h4 className="text-white font-medium mb-3 text-sm">Requirements</h4>
          <ul className="space-y-2 mb-8">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                <div className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-300" />
                </div>
                <span>{req}</span>
              </li>
            ))}
          </ul>

          {/* Apply CTA */}
          <a
            href={`mailto:careers@blocksscan.io?subject=Application for ${job.title}`}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Apply Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeDept, setActiveDept] = useState('All');
  const [activeType, setActiveType] = useState('All');

  useEffect(() => {
    fetch('/api/careers')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setJobs(data.data);
        }
      })
      .catch(() => {
        // Keep empty
      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const deptMatch = activeDept === 'All' || job.department === activeDept;
    const typeMatch = activeType === 'All' || job.type === activeType;
    return deptMatch && typeMatch;
  });

  const fullTimeCount = jobs.filter((j) => j.type === 'Full-time').length;
  const internCount = jobs.filter((j) => j.type === 'Internship').length;

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
            Join Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Build the Future With{' '}
            <span className="gradient-text">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            We're always looking for passionate individuals who believe in the power of
            decentralized technology. Explore our open positions and internship opportunities.
          </motion.p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: `${fullTimeCount}`, label: 'Open Positions', icon: Briefcase },
              { value: `${internCount}`, label: 'Internships', icon: GraduationCap },
              { value: 'Hybrid', label: 'Work Model', icon: MapPin },
              { value: 'Mumbai', label: 'Location', icon: Clock },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mx-auto mb-3">
                    <Icon className="h-5 w-5 text-accent-300" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── JOB LISTINGS ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-4"
          >
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-[#71717A] mr-2 self-center">Department:</span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeDept === dept
                      ? 'bg-accent-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]'
                      : 'bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-[#71717A] mr-2 self-center">Type:</span>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeType === type
                      ? 'bg-accent-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]'
                      : 'bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <JobCard key={job._id || job.id || i} job={job} index={i} />
            ))}
          </div>

          {/* Empty state */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#A1A1AA] text-lg mb-2">No positions match your filters.</p>
              <p className="text-[#71717A] text-sm">Try adjusting department or type filters.</p>
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
            Don't See a <span className="gradient-text">Perfect Fit</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A1A1AA] body-md max-w-xl mx-auto mb-8"
          >
            We're always interested in meeting talented people. Send us your resume and tell us
            why you'd be a great addition to the team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="mailto:careers@blocksscan.io?subject=General Application"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Send Open Application
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
