import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from '../../AdminNav';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function NewBlogPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <header className="relative z-10 border-b border-[#1E1E1E] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">BlocksScan Admin</h1>
            <p className="text-[#71717A] text-xs">Welcome back, {admin.email}</p>
          </div>
        </div>
        <AdminNav />
      </header>

      <main className="relative z-10 max-w-2xl mx-auto p-6 space-y-6">
        <a href="/admin/blogs" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </a>

        <h2 className="text-xl font-semibold text-white">Add Blog Post</h2>

        <BlogForm />
      </main>
    </div>
  );
}

function BlogForm() {
  return (
    <form action="/api/blogs" method="POST" className="card p-6 space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm text-[#A1A1AA] mb-2">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
          placeholder="e.g. The Future of XDC Network"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="category" className="block text-sm text-[#A1A1AA] mb-2">Category *</label>
          <input
            id="category"
            name="category"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. Blockchain"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm text-[#A1A1AA] mb-2">Author *</label>
          <input
            id="author"
            name="author"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. Dheeraj"
          />
        </div>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm text-[#A1A1AA] mb-2">Content *</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          required
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
          placeholder="Write your blog content here..."
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Publish Blog
        </button>
      </div>
    </form>
  );
}
