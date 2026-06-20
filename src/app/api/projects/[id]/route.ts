import dbConnect from '@/lib/db';
import Project from '@/models/project';
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
    const project = await Project.findOne({ _id: id, isDeleted: false }).lean();
    if (!project) return errorResponse('Project not found', 404);

    return successResponse(project);
  } catch (error) {
    console.error('GET /api/projects/[id] error:', error);
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
    const { title, slug, description, image, link } = body || {};

    if (!title || typeof title !== 'string') return errorResponse('title is required', 400);
    if (!slug || typeof slug !== 'string') return errorResponse('slug is required', 400);

    await dbConnect();
    const project = await Project.findByIdAndUpdate(
      id,
      { title, slug, description, image, link },
      { new: true, runValidators: true }
    );

    if (!project) return errorResponse('Project not found', 404);

    return successResponse(project.toJSON());
  } catch (error: unknown) {
    if ((error as Record<string, unknown>)?.code === 11000) return errorResponse('A project with this slug already exists', 409);
    console.error('PUT /api/projects/[id] error:', error);
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
    const project = await Project.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!project) return errorResponse('Project not found', 404);

    return successResponse({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/projects/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}
