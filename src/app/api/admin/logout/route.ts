import { cookies } from 'next/headers';
import { ADMIN_TOKEN_COOKIE } from '@/lib/adminAuth';
import { successResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_TOKEN_COOKIE);
  return successResponse({ message: 'Logged out successfully' });
}
