"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "Sharding the State Layer",
    excerpt: "An in-depth analysis of state execution sharding mechanisms within high-throughput Secure PoS architectures, detailing transaction routing pathways.",
    category: "Protocol",
    author: "Dheeraj",
    date: "Jun 18, 2026",
    readTime: "6 min read",
  },
  {
    title: "Next.js & Fastify Monorepos",
    excerpt: "Best practices for linking high-frequency API endpoints to client hydration paths with complete type-safety in distributed environments.",
    category: "Architecture",
    author: "Abhay Padgaonkar",
    date: "Jun 15, 2026",
    readTime: "8 min read",
  },
  {
    title: "Designing for Web3 Telemetry",
    excerpt: "Applying modern glassmorphic tokens to dense blockchain diagnostic dashboards without compromising visual hierarchy or mobile accessibility.",
    category: "UI/UX Design",
    author: "Sejal Mukane",
    date: "Jun 12, 2026",
    readTime: "5 min read",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-[#080808] py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D4B8]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#23F7DD] font-heading font-semibold uppercase tracking-widest text-[11px] mb-4 block">
              Insights & Updates
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-white">
              Latest Technical Logs
            </h2>
          </div>
          <p className="font-body text-[#A0A0A0] text-sm sm:text-base max-w-xs leading-relaxed">
            Read the latest technical findings, structural breakdowns, and optimization guides from our core development team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card card-glow-edge card-hover p-6 flex flex-col justify-between min-h-[360px]"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#23F7DD] bg-[#23F7DD]/5 px-2.5 py-0.5 rounded-full uppercase">
                    {blog.category}
                  </span>
                  <span className="text-[10px] text-[#555555] font-mono">
                    {blog.readTime}
                  </span>
                </div>

                {/* Article Content */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 line-clamp-2 hover:text-[#23F7DD] transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                <p className="font-body text-[#A0A0A0] text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                <div>
                  <p className="text-xs font-heading font-bold text-white mb-0.5">
                    {blog.author}
                  </p>
                  <p className="text-[10px] font-mono text-white/30">
                    {blog.date}
                  </p>
                </div>
                <svg className="w-4 h-4 text-white/20 hover:text-[#23F7DD] transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
