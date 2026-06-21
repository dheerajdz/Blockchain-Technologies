'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface Blog {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
}

const fallbackBlogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of XDC Network in 2025',
    category: 'Blockchain',
    content: 'Exploring the latest developments and upcoming features in the XDC ecosystem that are set to revolutionize enterprise blockchain adoption.',
    author: 'Dheeraj',
    createdAt: '2025-06-15',
  },
  {
    id: '2',
    title: 'Building Secure Smart Contracts: Best Practices',
    category: 'Development',
    content: 'A comprehensive guide to writing audited, secure smart contracts with real-world examples and common pitfalls to avoid.',
    author: 'Team',
    createdAt: '2025-06-10',
  },
  {
    id: '3',
    title: 'AI Meets Blockchain: The OpenScan Story',
    category: 'AI',
    content: 'How we integrated artificial intelligence with blockchain analytics to create smarter, more intuitive explorer experiences.',
    author: 'Team',
    createdAt: '2025-06-05',
  },
];

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [hovered, setHovered] = useState(false);

  const date = new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card-light overflow-hidden group cursor-pointer"
    >
      <motion.div
        animate={hovered ? { y: -4, boxShadow: '0 12px 48px rgba(0,0,0,0.15)' } : { y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        {/* Category Badge */}
        <div className="px-5 pt-5">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#0D9488] text-xs font-medium">
            {blog.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-[#18181B] text-lg mb-3 group-hover:text-[#0D9488] transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-[#52525B] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {blog.content}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[#71717A]">
            <span>{blog.author}</span>
            <span>{date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>(fallbackBlogs);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setBlogs(data.data.slice(0, 3));
        }
      })
      .catch(() => {
        // Keep fallback blogs
      });
  }, []);

  return (
    <section id="blog" className="section section-light">
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
            Latest Insights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-1 mb-4"
          >
            From Our <span className="gradient-text">Blog</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#52525B] body-md max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tutorials, and insights from the blockchain world.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
