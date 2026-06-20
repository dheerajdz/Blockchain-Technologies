import dbConnect from '@/lib/db';
import Team from '@/models/team';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) return errorResponse('Invalid id', 400);

    await dbConnect();
    const member = await Team.findOne({ _id: id, isDeleted: false }).lean();
    if (!member) return errorResponse('Team member not found', 404);

    return successResponse(member);
  } catch (error) {
    console.error('GET /api/team/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) return errorResponse('Invalid id', 400);

    const body = await request.json();
    const { name, role, bio, image, order } = body || {};

    if (!name || typeof name !== 'string') return errorResponse('name is required', 400);
    if (!role || typeof role !== 'string') return errorResponse('role is required', 400);

    await dbConnect();
    const member = await Team.findByIdAndUpdate(
      id,
      { name, role, bio, image, order },
      { new: true, runValidators: true }
    );

    if (!member) return errorResponse('Team member not found', 404);

    return successResponse(member.toJSON());
  } catch (error) {
    console.error('PUT /api/team/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) return errorResponse('Invalid id', 400);

    await dbConnect();
    const member = await Team.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!member) return errorResponse('Team member not found', 404);

    return successResponse({ message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/team/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}
