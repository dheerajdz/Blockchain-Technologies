import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/adminAuth';
import TeamForm from './TeamForm';

export const dynamic = 'force-dynamic';

export default async function NewTeamMemberPage() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Add Team Member</h1>
        <p className="text-[#71717A] text-sm mt-1">Add a new member to your team</p>
      </div>

      <TeamForm />
    </div>
  );
}
