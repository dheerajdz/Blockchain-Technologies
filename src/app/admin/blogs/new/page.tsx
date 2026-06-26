import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { ArrowLeft, Plus, Shield } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function NewBlogPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Add Blog Post</h1>
        <p className="text-[#71717A] text-sm mt-1">Create a new blog post</p>
      </div>

      <BlogForm />
    </div>
  );
}

function BlogForm() {
  return (
    <form action="/api/blogs" method="POST" className="card p-6 space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm text-[#A1A1AA] mb-2">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
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
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
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
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
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
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all resize-none"
          placeholder="Write your blog content here..."
        />
      </div>

      <div className="pt-2 flex items-center gap-3">
        <button type="submit" className="btn btn-primary">
          Publish Blog
        </button>
        <a href="/admin/blogs" className="btn btn-outline text-sm py-2.5 px-5">
          Cancel
        </a>
      </div>
    </form>
  );
}
