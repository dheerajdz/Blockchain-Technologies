import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from '../../AdminNav';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function NewTeamMemberPage() {
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
        <a href="/admin/team" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Team
        </a>

        <h2 className="text-xl font-semibold text-white">Add Team Member</h2>

        <TeamForm />
      </main>
    </div>
  );
}

function TeamForm() {
  return (
    <form action="/api/team" method="POST" className="card p-6 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-[#A1A1AA] mb-2">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. John Doe"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm text-[#A1A1AA] mb-2">Role *</label>
          <input
            id="role"
            name="role"
            type="text"
            required
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. Lead Developer"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm text-[#A1A1AA] mb-2">Bio</label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
          placeholder="Short bio..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="image" className="block text-sm text-[#A1A1AA] mb-2">Image URL</label>
          <input
            id="image"
            name="image"
            type="url"
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="https://..."
          />
        </div>

        <div>
          <label htmlFor="order" className="block text-sm text-[#A1A1AA] mb-2">Display Order</label>
          <input
            id="order"
            name="order"
            type="number"
            defaultValue={0}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
          />
        </div>
      </div>

      <div className="pt-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Add Member
        </button>
      </div>
    </form>
  );
}
