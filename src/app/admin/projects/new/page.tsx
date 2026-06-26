import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { ArrowLeft, Plus, Rocket } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function NewProjectPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Add New Project</h1>
        <p className="text-[#71717A] text-sm mt-1">Create a new showcase project</p>
      </div>

      <ProjectForm />
    </div>
  );
}

function ProjectForm() {
  return (
    <form action="/api/projects" method="POST" className="card p-6 space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm text-[#A1A1AA] mb-2">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
          placeholder="e.g. XDCScan Explorer"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm text-[#A1A1AA] mb-2">Slug *</label>
        <input
          id="slug"
          name="slug"
          type="text"
          required
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
          placeholder="e.g. xdcscan-explorer"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm text-[#A1A1AA] mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all resize-none"
          placeholder="Short project description..."
        />
      </div>

      <div>
        <label htmlFor="link" className="block text-sm text-[#A1A1AA] mb-2">Project Link</label>
        <input
          id="link"
          name="link"
          type="url"
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#2A468B]/50 focus:ring-1 focus:ring-[#2A468B]/30 transition-all"
          placeholder="https://..."
        />
      </div>

      <div className="pt-2 flex items-center gap-3">
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
        <a href="/admin/projects" className="btn btn-outline text-sm py-2.5 px-5">
          Cancel
        </a>
      </div>
    </form>
  );
}
