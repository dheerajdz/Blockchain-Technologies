import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { ArrowLeft, Mail, User, MessageSquare, Clock } from 'lucide-react';

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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Contact Submissions</h1>
        <p className="text-[#71717A] text-sm mt-1">Messages from your website visitors</p>
      </div>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="card p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A468B]/15 border border-[#2A468B]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#5B7FC4] font-semibold text-sm">
                    {contact.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{contact.name}</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-[#5B7FC4] hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#71717A] text-xs">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                {new Date(contact.createdAt).toLocaleString()}
              </div>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
              <p className="text-[#A1A1AA] text-sm whitespace-pre-wrap leading-relaxed">{contact.message}</p>
            </div>
          </div>
        ))}
        {contacts.length === 0 && (
          <div className="card p-12 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#71717A]" strokeWidth={1.5} />
              </div>
              <p className="text-[#71717A]">No contact submissions yet.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
