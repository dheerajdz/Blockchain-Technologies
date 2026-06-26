'use client';

import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── TYPES ─── */

interface Blog {
  _id?: string;
  id?: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
}

/* ─── DATA ─── */

/* ─── COMPONENTS ─── */

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [hovered, setHovered] = useState(false);

  const date = new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.a
      href={`/blog/${blog.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card overflow-hidden group cursor-pointer block"
    >
      <motion.div
        animate={hovered ? { y: -4 } : { y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        {/* Category Badge */}
        <div className="px-6 pt-6">
          <span className="badge mb-3 inline-block">{blog.category}</span>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex-1 flex flex-col">
          <h3 className="heading-3 text-white mb-3 group-hover:text-accent-300 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {blog.content}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[#71717A]">
            <div className="flex items-center gap-1.5">
              <User className="h-3 w-3" strokeWidth={1.5} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" strokeWidth={1.5} />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}

/* ─── PAGE ─── */

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setBlogs(data.data);
        }
      })
      .catch(() => {
        // Keep fallback blogs
      });
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(blogs.map((b) => b.category));
    return ['All', ...Array.from(cats)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    let result = blogs;

    if (activeCategory !== 'All') {
      result = result.filter((b) => b.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.content.toLowerCase().includes(query) ||
          b.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [blogs, activeCategory, searchQuery]);

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
            Insights & Updates
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            From Our <span className="gradient-text">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            Stay updated with the latest trends, tutorials, and insights from the blockchain world.
          </motion.p>
        </div>
      </section>

      {/* ─── BLOG LISTING ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          {/* Search + Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-4"
          >
            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#71717A]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-accent-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]'
                      : 'bg-accent-500/10 text-accent-300 border border-accent-500/20 hover:bg-accent-500/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, i) => (
              <BlogCard key={blog._id || blog.id || i} blog={blog} index={i} />
            ))}
          </div>

          {/* Empty state */}
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#A1A1AA] text-lg mb-2">No articles found.</p>
              <p className="text-[#71717A] text-sm">Try adjusting your search or filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
