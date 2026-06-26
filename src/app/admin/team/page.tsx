import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { Plus, Users, Trash2 } from 'lucide-react';
import DeleteButton from '../projects/DeleteButton';

export const dynamic = 'force-dynamic';

interface TeamMember {
  _id?: string;
  id?: string;
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Team Members</h1>
          <p className="text-[#71717A] text-sm mt-1">Manage your team</p>
        </div>
        <a href="/admin/team/new" className="btn btn-primary text-sm py-2.5 px-5 self-start">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add Member
        </a>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-[#A1A1AA]">
            <tr>
              <th className="p-4 font-medium">Member</th>
              <th className="p-4 font-medium hidden sm:table-cell">Role</th>
              <th className="p-4 font-medium hidden md:table-cell">Order</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {members.map((member) => (
              <tr key={member._id || member.id || ''} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2A468B]/15 border border-[#2A468B]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#5B7FC4] text-sm font-semibold">
                        {member.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{member.name}</p>
                      {member.bio && (
                        <p className="text-[#71717A] text-xs truncate max-w-[200px]">{member.bio}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-[#A1A1AA] hidden sm:table-cell">{member.role}</td>
                <td className="p-4 text-[#A1A1AA] hidden md:table-cell">{member.order ?? 0}</td>
                <td className="p-4 text-right">
                  <DeleteButton id={member._id || member.id || ''} resource="team" />
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr key="empty">
                <td colSpan={4} className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#71717A]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#71717A]">No team members yet. Add your first member.</p>
                    <a href="/admin/team/new" className="text-[#5B7FC4] hover:underline text-sm">Add Member →</a>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


