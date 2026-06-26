import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { Plus, Rocket, Trash2 } from 'lucide-react';
import DeleteButton from './DeleteButton';

export const dynamic = 'force-dynamic';

interface Project {
  _id: string;
  id?: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  link?: string;
  createdAt: string;
}

async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}

export default async function AdminProjectsPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const projects = await fetchProjects();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-[#71717A] text-sm mt-1">Manage your showcase projects</p>
        </div>
        <a href="/admin/projects/new" className="btn btn-primary text-sm py-2.5 px-5 self-start">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add Project
        </a>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-[#A1A1AA]">
            <tr>
              <th className="p-4 font-medium">Project</th>
              <th className="p-4 font-medium hidden sm:table-cell">Slug</th>
              <th className="p-4 font-medium hidden md:table-cell">Link</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {projects.map((project) => (
              <tr key={project._id || project.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2A468B]/15 border border-[#2A468B]/20 flex items-center justify-center shrink-0">
                      <Rocket className="h-4 w-4 text-[#5B7FC4]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{project.title}</p>
                      {project.description && (
                        <p className="text-[#71717A] text-xs truncate max-w-[200px]">{project.description}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-[#A1A1AA] hidden sm:table-cell">{project.slug}</td>
                <td className="p-4 hidden md:table-cell">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#5B7FC4] hover:underline text-xs">
                      {project.link.replace(/^https?:\/\//, '')}
                    </a>
                  ) : (
                    <span className="text-[#71717A]">—</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <DeleteButton id={project._id || project.id || ''} resource="projects" />
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr key="empty">
                <td colSpan={4} className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-[#71717A]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#71717A]">No projects yet. Add your first project.</p>
                    <a href="/admin/projects/new" className="text-[#5B7FC4] hover:underline text-sm">Add Project →</a>
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

