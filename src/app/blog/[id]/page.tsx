'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── TYPES ─── */

interface Blog {
  id: string;
  title: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
}

/* ─── DATA ─── */

const fallbackBlogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of XDC Network in 2025',
    category: 'Blockchain',
    content: 'Exploring the latest developments and upcoming features in the XDC ecosystem that are set to revolutionize enterprise blockchain adoption. The XDC Network has positioned itself as a leading enterprise-grade blockchain, offering hybrid architecture that bridges the gap between public and private networks.\n\nIn this article, we dive deep into the upcoming protocol upgrades, enterprise partnerships, and developer tooling that will define the XDC ecosystem in 2025 and beyond.',
    author: 'Dheeraj',
    createdAt: '2025-06-15',
  },
  {
    id: '2',
    title: 'Building Secure Smart Contracts: Best Practices',
    category: 'Development',
    content: 'A comprehensive guide to writing audited, secure smart contracts with real-world examples and common pitfalls to avoid. Smart contract security is paramount in the blockchain space, where a single vulnerability can lead to catastrophic losses.\n\nWe cover reentrancy attacks, integer overflow, access control, and the importance of formal verification in ensuring your contracts are bulletproof.',
    author: 'Team',
    createdAt: '2025-06-10',
  },
  {
    id: '3',
    title: 'AI Meets Blockchain: The OpenScan Story',
    category: 'AI',
    content: 'How we integrated artificial intelligence with blockchain analytics to create smarter, more intuitive explorer experiences. The convergence of AI and blockchain represents one of the most exciting frontiers in technology.\n\nAt OpenScan, we leveraged machine learning to provide predictive analytics, anomaly detection, and natural language querying capabilities that make blockchain data accessible to everyone.',
    author: 'Team',
    createdAt: '2025-06-05',
  },
];

/* ─── PAGE ─── */

export default function BlogPostPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const blogId = params?.id as string;

  useEffect(() => {
    fetch(`/api/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setBlog(data.data);
        } else {
          // Fallback
          const fallback = fallbackBlogs.find((b) => b.id === blogId);
          setBlog(fallback || null);
        }
      })
      .catch(() => {
        const fallback = fallbackBlogs.find((b) => b.id === blogId);
        setBlog(fallback || null);
      })
      .finally(() => setLoading(false));
  }, [blogId]);

  if (loading) {
    return (
      <main className="relative min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent-500/30 border-t-accent-500 rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="relative min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <div className="pt-32 pb-20 container text-center">
          <h1 className="heading-1 mb-4">Article Not Found</h1>
          <p className="text-[#A1A1AA] mb-8">The article you are looking for does not exist.</p>
          <Link href="/blog" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const date = new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const readTime = Math.ceil(blog.content.split(' ').length / 200);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm">Back to Blog</span>
          </motion.a>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="badge mb-4 inline-block"
          >
            {blog.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-lg mb-6 max-w-4xl"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-[#A1A1AA]"
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-accent-300" strokeWidth={1.5} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent-300" strokeWidth={1.5} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-300" strokeWidth={1.5} />
              <span>{readTime} min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[680px] mx-auto"
          >
            {/* Article body */}
            <div className="prose prose-invert prose-lg max-w-none">
              {blog.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[#A1A1AA] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="glow-divider my-12" />

            {/* Author box */}
            <div className="card p-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 font-bold">
                {blog.author[0]}
              </div>
              <div>
                <div className="text-white font-medium">{blog.author}</div>
                <div className="text-[#71717A] text-sm">BlocksScan Team</div>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-10 text-center">
              <Link href="/blog" className="btn btn-outline">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                Back to All Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
