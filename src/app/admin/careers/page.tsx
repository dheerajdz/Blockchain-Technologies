import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { Plus, Briefcase } from 'lucide-react';
import DeleteButton from '../projects/DeleteButton';

export const dynamic = 'force-dynamic';

interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  createdAt: string;
}

async function fetchCareers(): Promise<Career[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/careers`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}

export default async function AdminCareersPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const careers = await fetchCareers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Career Vacancies</h1>
          <p className="text-[#71717A] text-sm mt-1">Manage job openings and internships</p>
        </div>
        <a href="/admin/careers/new" className="btn btn-primary text-sm py-2.5 px-5 self-start">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add Vacancy
        </a>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-[#A1A1AA]">
            <tr>
              <th className="p-4 font-medium">Position</th>
              <th className="p-4 font-medium hidden sm:table-cell">Department</th>
              <th className="p-4 font-medium hidden md:table-cell">Type</th>
              <th className="p-4 font-medium hidden lg:table-cell">Location</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {careers.map((career) => (
              <tr key={career.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2A468B]/15 border border-[#2A468B]/20 flex items-center justify-center shrink-0">
                      <Briefcase className="h-4 w-4 text-[#5B7FC4]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{career.title}</p>
                      <p className="text-[#71717A] text-xs">{new Date(career.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden sm:table-cell">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-[#2A468B]/10 border border-[#2A468B]/20 text-[#5B7FC4] text-xs">
                    {career.department}
                  </span>
                </td>
                <td className="p-4 text-[#A1A1AA] hidden md:table-cell">{career.type}</td>
                <td className="p-4 text-[#A1A1AA] hidden lg:table-cell">{career.location}</td>
                <td className="p-4 text-right">
                  <DeleteButton id={career.id} resource="careers" />
                </td>
              </tr>
            ))}
            {careers.length === 0 && (
              <tr key="empty">
                <td colSpan={5} className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-[#71717A]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#71717A]">No vacancies yet. Add your first job opening.</p>
                    <a href="/admin/careers/new" className="text-[#5B7FC4] hover:underline text-sm">Add Vacancy →</a>
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
