import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
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
    const blog = await Blog.findOne({ _id: id, isDeleted: false }).lean();
    if (!blog) return errorResponse('Blog not found', 404);

    return successResponse(blog);
  } catch (error) {
    console.error('GET /api/blogs/[id] error:', error);
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
    const { title, category, content, author } = body || {};

    if (!title || typeof title !== 'string') return errorResponse('title is required', 400);
    if (!category || typeof category !== 'string') return errorResponse('category is required', 400);
    if (!content || typeof content !== 'string') return errorResponse('content is required', 400);
    if (!author || typeof author !== 'string') return errorResponse('author is required', 400);

    await dbConnect();
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, category, content, author },
      { new: true, runValidators: true }
    );

    if (!blog) return errorResponse('Blog not found', 404);

    return successResponse(blog.toJSON());
  } catch (error: unknown) {
    if ((error as Record<string, unknown>)?.code === 11000) return errorResponse('A blog with this title already exists', 409);
    console.error('PUT /api/blogs/[id] error:', error);
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
    const blog = await Blog.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!blog) return errorResponse('Blog not found', 404);

    return successResponse({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/blogs/[id] error:', error);
    return errorResponse('Internal server error', 500);
  }
}
