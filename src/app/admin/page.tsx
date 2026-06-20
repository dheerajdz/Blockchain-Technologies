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
    <div className="min-h-screen bg-[#020205] text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">BlocksScan Admin</h1>
          <p className="text-white/50 text-xs">Welcome back, {admin.email}</p>
        </div>
        <AdminNav />
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Projects" href="/admin/projects" desc="Manage showcase projects" />
          <Card title="Team" href="/admin/team" desc="Manage team members" />
          <Card title="Blogs" href="/admin/blogs" desc="Manage blog posts" />
          <Card title="Contacts" href="/admin/contacts" desc="View contact submissions" />
        </div>
      </main>
    </div>
  );
}

function Card({ title, href, desc }: { title: string; href: string; desc: string }) {
  return (
    <a
      href={href}
      className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition group"
    >
      <h3 className="font-semibold text-white group-hover:text-[#00D4AA]">{title}</h3>
      <p className="text-white/40 text-sm mt-1">{desc}</p>
    </a>
  );
}
