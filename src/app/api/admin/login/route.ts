import dbConnect from '@/lib/db';
import Admin from '@/models/admin';
import bcrypt from 'bcryptjs';
import { signAdminToken } from '@/lib/jwt';
import { ADMIN_TOKEN_COOKIE } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body || {};

    if (!email || typeof email !== 'string' || !password || typeof password !== 'string') {
      return errorResponse('Email and password are required', 400);
    }

    await dbConnect();
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) return errorResponse('Invalid credentials', 401);

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) return errorResponse('Invalid credentials', 401);

    const token = signAdminToken(admin._id.toString());
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_TOKEN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return successResponse(admin.toJSON());
  } catch (error) {
    console.error('Login error:', error);
    return errorResponse('Internal server error', 500);
  }
}
