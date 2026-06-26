import dbConnect from '@/lib/db';
import Career from '@/models/career';
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
    const career = await Career.findOne({ _id: id, isDeleted: false }).lean();
    if (!career) return errorResponse('Career not found', 404);

    return successResponse(career);
  } catch (error) {
    console.error('GET /api/careers/[id] error:', error);
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
    const { title, department, location, type, description, requirements } = body || {};

    await dbConnect();
    const career = await Career.findByIdAndUpdate(
      id,
      { title, department, location, type, description, requirements },
      { new: true, runValidators: true }
    );

    if (!career) return errorResponse('Career not found', 404);

    return successResponse(career.toJSON());
  } catch (error) {
    console.error('PUT /api/careers/[id] error:', error);
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
    const career = await Career.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!career) return errorResponse('Career not found', 404);

    return successResponse({ message: 'Career deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/careers/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}
