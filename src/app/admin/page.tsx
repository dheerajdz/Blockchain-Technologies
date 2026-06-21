import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from './AdminNav';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background */}
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

      <main className="relative z-10 max-w-4xl mx-auto p-6 space-y-6">
        <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Projects" href="/admin/projects" desc="Manage showcase projects" icon="🚀" />
          <Card title="Team" href="/admin/team" desc="Manage team members" icon="👥" />
          <Card title="Blogs" href="/admin/blogs" desc="Manage blog posts" icon="📝" />
          <Card title="Contacts" href="/admin/contacts" desc="View contact submissions" icon="📨" />
        </div>
      </main>
    </div>
  );
}

function Card({ title, href, desc, icon }: { title: string; href: string; desc: string; icon: string }) {
  return (
    <a
      href={href}
      className="block card p-6 hover:bg-white/5 transition group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-white group-hover:text-accent-300 transition-colors">{title}</h3>
      </div>
      <p className="text-[#71717A] text-sm">{desc}</p>
    </a>
  );
}
