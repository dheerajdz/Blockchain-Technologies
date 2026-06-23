import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from '../AdminNav';
import { ArrowLeft, Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  order?: number;
  createdAt: string;
}

async function fetchTeam(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/team`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}

export default async function AdminTeamPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const members = await fetchTeam();

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

      <main className="relative z-10 max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <a href="/admin" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </a>
          <a href="/admin/team/new" className="btn btn-primary text-sm py-2 px-4">
            <Plus className="h-4 w-4" />
            Add Member
          </a>
        </div>

        <h2 className="text-xl font-semibold text-white">Team Members</h2>

        <div className="card overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-[#A1A1AA]">
              <tr>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Order</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-white/5">
                  <td className="p-4 text-white">{member.name}</td>
                  <td className="p-4 text-[#A1A1AA]">{member.role}</td>
                  <td className="p-4 text-[#A1A1AA]">{member.order ?? 0}</td>
                  <td className="p-4 text-right">
                    <DeleteButton id={member.id} resource="team" />
                  </td>
                </tr>
              ))}
              {members.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-[#71717A]">
                    No team members yet. Add your first member.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function DeleteButton({ id, resource }: { id: string; resource: string }) {
  return (
    <form
      action={`/api/${resource}/${id}`}
      method="POST"
      onSubmit={(e) => {
        if (!confirm('Are you sure you want to delete this item?')) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="_method" value="DELETE" />
      <button type="submit" className="text-sm text-red-400 hover:text-red-300 transition-colors">
        Delete
      </button>
    </form>
  );
}
