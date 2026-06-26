'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Rocket,
  Users,
  FileText,
  Mail,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/projects', label: 'Projects', icon: Rocket },
  { href: '/admin/team', label: 'Team', icon: Users },
  { href: '/admin/blogs', label: 'Blogs', icon: FileText },
  { href: '/admin/careers', label: 'Careers', icon: Briefcase },
  { href: '/admin/contacts', label: 'Contacts', icon: Mail },
  { href: '/admin/contact-info', label: 'Contact Info', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<{ email: string; name?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/me', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setAdmin(data.data);
        } else {
          throw new Error('Unauthorized');
        }
      })
      .catch(() => {
        router.push('/admin/login');
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#2A468B]/30 border-t-[#2A468B] rounded-full animate-spin" />
      </div>
    );
  }

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#0A0A0A]/95 backdrop-blur-xl border-r border-white/[0.06] z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/[0.06]">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2A468B] flex items-center justify-center shadow-lg shadow-[#2A468B]/20">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="font-heading font-semibold text-white text-lg leading-tight">
                BlocksScan
              </h1>
              <p className="text-[#71717A] text-xs">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-[#2A468B]/15 text-white border border-[#2A468B]/20'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    isActive ? 'text-[#5B7FC4]' : 'text-[#71717A] group-hover:text-[#A1A1AA]'
                  }`}
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <ChevronRight className="h-4 w-4 ml-auto text-[#5B7FC4]" strokeWidth={1.5} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: User + Logout */}
        <div className="p-4 border-t border-white/[0.06] space-y-3">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-[#2A468B]/20 border border-[#2A468B]/30 flex items-center justify-center">
              <span className="text-[#5B7FC4] text-sm font-semibold">
                {(admin.name || admin.email).charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{admin.name || 'Admin'}</p>
              <p className="text-[#71717A] text-xs truncate">{admin.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#A1A1AA] hover:text-red-400 hover:bg-red-500/5 transition-all text-sm"
          >
            <LogOut className="h-4 w-4" strokeWidth={1.5} />
            Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Menu className="h-5 w-5 text-[#A1A1AA]" strokeWidth={1.5} />
            </button>
            <div>
              <p className="text-[#71717A] text-xs">Welcome back</p>
              <p className="text-white font-medium text-sm">{admin.name || admin.email}</p>
            </div>
          </div>
          <Link
            href="/"
            className="text-sm text-[#A1A1AA] hover:text-white transition-colors hidden sm:block"
          >
            View Website →
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
