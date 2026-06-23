import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import AdminNav from '../AdminNav';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

async function fetchContacts(): Promise<Contact[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/contacts`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}

export default async function AdminContactsPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const contacts = await fetchContacts();

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
        <a href="/admin" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </a>

        <h2 className="text-xl font-semibold text-white">Contact Submissions</h2>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="card p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-white font-medium">{contact.name}</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-accent-300 hover:underline">
                    {contact.email}
                  </a>
                </div>
                <p className="text-xs text-[#71717A]">
                  {new Date(contact.createdAt).toLocaleString()}
                </p>
              </div>
              <hr className="border-white/5" />
              <p className="text-[#A1A1AA] text-sm whitespace-pre-wrap">{contact.message}</p>
            </div>
          ))}
          {contacts.length === 0 && (
            <div className="card p-8 text-center text-[#71717A]">
              No contact submissions yet.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
