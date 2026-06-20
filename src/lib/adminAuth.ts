import { cookies } from 'next/headers';
import { verifyAdminToken } from './jwt';
import Admin, { IAdmin } from '@/models/admin';

export const ADMIN_TOKEN_COOKIE = 'admin_token';

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

type SafeAdmin = Pick<IAdmin, '_id' | 'name' | 'email' | 'role' | 'createdAt' | 'updatedAt'>;

export async function getCurrentAdmin(): Promise<SafeAdmin | null> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get(ADMIN_TOKEN_COOKIE);
  if (!tokenCookie?.value) return null;

  const payload = verifyAdminToken(tokenCookie.value);
  if (!payload?.adminId) return null;

  try {
    const admin = await Admin.findById(payload.adminId).select('-passwordHash').lean();
    if (!admin) return null;
    return admin as unknown as SafeAdmin;
  } catch {
    return null;
  }
}

export async function requireAdmin(): Promise<SafeAdmin> {
  const admin = await getCurrentAdmin();
  if (!admin) throw new UnauthorizedError();
  return admin;
}
