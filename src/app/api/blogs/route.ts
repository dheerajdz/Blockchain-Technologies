import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .lean();
    return successResponse(blogs);
  } catch (error) {
    console.error('GET /api/blogs error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const body = await request.json();
    const { title, category, content, author } = body || {};

    if (!title || typeof title !== 'string') return errorResponse('title is required', 400);
    if (!category || typeof category !== 'string') return errorResponse('category is required', 400);
    if (!content || typeof content !== 'string') return errorResponse('content is required', 400);
    if (!author || typeof author !== 'string') return errorResponse('author is required', 400);

    await dbConnect();
    const blog = await Blog.create({ title, category, content, author });

    return successResponse(blog.toJSON(), undefined, 201);
  } catch (error: unknown) {
    if ((error as Record<string, unknown>)?.code === 11000) return errorResponse('A blog with this title already exists', 409);
    console.error('POST /api/blogs error:', error);
    return errorResponse('Internal server error', 500);
  }
}
