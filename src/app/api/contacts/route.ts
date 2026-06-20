import dbConnect from '@/lib/db';
import Contact from '@/models/contact';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    await dbConnect();
    const contacts = await Contact.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .lean();
    return successResponse(contacts);
  } catch (error) {
    console.error('GET /api/contacts error:', error);
    return errorResponse('Internal server error', 500);
  }
}
