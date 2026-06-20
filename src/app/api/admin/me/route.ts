import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  const admin = await getCurrentAdmin();
  if (!admin) return errorResponse('Unauthorized', 401);
  return successResponse(admin);
}
