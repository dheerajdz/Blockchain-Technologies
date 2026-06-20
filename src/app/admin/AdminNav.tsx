'use client';

import { useRouter } from 'next/navigation';

export default function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-white/50 hover:text-white transition"
    >
      Logout
    </button>
  );
}
