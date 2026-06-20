import dbConnect from '@/lib/db';
import Team from '@/models/team';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const members = await Team.find({ isDeleted: false })
      .sort({ order: 1, createdAt: -1 })
      .lean();
    return successResponse(members);
  } catch (error) {
    console.error('GET /api/team error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const body = await request.json();
    const { name, role, bio, image, order } = body || {};

    if (!name || typeof name !== 'string') return errorResponse('name is required', 400);
    if (!role || typeof role !== 'string') return errorResponse('role is required', 400);

    await dbConnect();
    const member = await Team.create({ name, role, bio, image, order });

    return successResponse(member.toJSON(), undefined, 201);
  } catch (error) {
    console.error('POST /api/team error:', error);
    return errorResponse('Internal server error', 500);
  }
}
