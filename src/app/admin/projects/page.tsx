import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from '../AdminNav';
import { ArrowLeft, Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Project {
  id: string;
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
          <a href="/admin/projects/new" className="btn btn-primary text-sm py-2 px-4">
            <Plus className="h-4 w-4" />
            Add Project
          </a>
        </div>

        <h2 className="text-xl font-semibold text-white">Projects</h2>

        <div className="card overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-[#A1A1AA]">
              <tr>
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Slug</th>
                <th className="p-4 font-medium">Link</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-white/5">
                  <td className="p-4 text-white">{project.title}</td>
                  <td className="p-4 text-[#A1A1AA]">{project.slug}</td>
                  <td className="p-4 text-[#A1A1AA]">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:underline">
                        {project.link}
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <DeleteButton id={project.id} resource="projects" />
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-[#71717A]">
                    No projects yet. Add your first project.
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
    <form action={`/api/${resource}/${id}`} method="POST">
      <input type="hidden" name="_method" value="DELETE" />
      <button
        type="submit"
        formAction={`/api/${resource}/${id}`}
        className="text-sm text-red-400 hover:text-red-300 transition-colors"
        onClick={(e) => {
          if (!confirm('Are you sure you want to delete this item?')) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </button>
    </form>
  );
}
