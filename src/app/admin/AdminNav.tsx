'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
    >
      <LogOut className="h-4 w-4" strokeWidth={1.5} />
      Logout
    </button>
  );
}
