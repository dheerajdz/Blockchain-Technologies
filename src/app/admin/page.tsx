import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { Rocket, Users, FileText, Mail, ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Stats {
  projects: number;
  team: number;
  blogs: number;
  contacts: number;
}

async function fetchStats(): Promise<Stats> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    const [projects, team, blogs, contacts] = await Promise.all([
      fetch(`${base}/api/projects`, { cache: 'no-store' }).then(r => r.json()).catch(() => ({ data: [] })),
      fetch(`${base}/api/team`, { cache: 'no-store' }).then(r => r.json()).catch(() => ({ data: [] })),
      fetch(`${base}/api/blogs`, { cache: 'no-store' }).then(r => r.json()).catch(() => ({ data: [] })),
      fetch(`${base}/api/contacts`, { cache: 'no-store' }).then(r => r.json()).catch(() => ({ data: [] })),
    ]);
    return {
      projects: projects.data?.length || 0,
      team: team.data?.length || 0,
      blogs: blogs.data?.length || 0,
      contacts: contacts.data?.length || 0,
    };
  } catch {
    return { projects: 0, team: 0, blogs: 0, contacts: 0 };
  }
}

export default async function AdminDashboard() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const stats = await fetchStats();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-[#71717A] text-sm mt-1">Manage your website content and view submissions.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Projects"
          value={stats.projects}
          href="/admin/projects"
          icon={Rocket}
          color="from-[#2A468B]/20 to-[#2A468B]/5"
          borderColor="border-[#2A468B]/20"
          iconColor="text-[#5B7FC4]"
        />
        <StatCard
          title="Team Members"
          value={stats.team}
          href="/admin/team"
          icon={Users}
          color="from-[#3D5A9E]/20 to-[#3D5A9E]/5"
          borderColor="border-[#3D5A9E]/20"
          iconColor="text-[#6E89C2]"
        />
        <StatCard
          title="Blog Posts"
          value={stats.blogs}
          href="/admin/blogs"
          icon={FileText}
          color="from-[#1A2F5C]/30 to-[#1A2F5C]/5"
          borderColor="border-[#1A2F5C]/30"
          iconColor="text-[#5B7FC4]"
        />
        <StatCard
          title="Contacts"
          value={stats.contacts}
          href="/admin/contacts"
          icon={Mail}
          color="from-[#22386F]/20 to-[#22386F]/5"
          borderColor="border-[#22386F]/20"
          iconColor="text-[#6E89C2]"
        />
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <QuickAction href="/admin/projects/new" label="Add Project" />
          <QuickAction href="/admin/team/new" label="Add Team Member" />
          <QuickAction href="/admin/blogs/new" label="Add Blog Post" />
          <QuickAction href="/admin/contacts" label="View Contacts" />
        </div>
      </div>

      {/* Recent Activity Hint */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-2">Getting Started</h2>
        <p className="text-[#A1A1AA] text-sm leading-relaxed">
          Use the sidebar to navigate between sections. Click any stat card above to jump directly to that section.
          All changes are saved to your MongoDB database and reflected on the public website immediately.
        </p>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  href,
  icon: Icon,
  color,
  borderColor,
  iconColor,
}: {
  title: string;
  value: number;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  borderColor: string;
  iconColor: string;
}) {
  return (
    <a
      href={href}
      className={`card p-5 hover:bg-white/[0.03] transition-all duration-200 group ${borderColor} border bg-gradient-to-br ${color}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10`}>
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={1.5} />
        </div>
        <ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-white transition-colors" strokeWidth={1.5} />
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-[#A1A1AA] text-sm mt-1">{title}</p>
    </a>
  );
}

function QuickAction({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/[0.06] hover:bg-[#2A468B]/10 hover:border-[#2A468B]/20 transition-all duration-200 group"
    >
      <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">{label}</span>
      <ArrowUpRight className="h-4 w-4 text-[#71717A] group-hover:text-[#5B7FC4] transition-colors" strokeWidth={1.5} />
    </a>
  );
}
