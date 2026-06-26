import dbConnect from '@/lib/db';
import Project from '@/models/project';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .lean();
    return successResponse(projects);
  } catch (error) {
    console.error('GET /api/projects error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    let body;
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = Object.fromEntries(formData);
    } else {
      const text = await request.text();
      try {
        body = JSON.parse(text);
      } catch {
        return errorResponse('Invalid request body: expected JSON or form data', 400);
      }
    }
    const { title, slug, description, image, link } = body || {};

    if (!title || typeof title !== 'string') return errorResponse('title is required', 400);
    if (!slug || typeof slug !== 'string') return errorResponse('slug is required', 400);

    await dbConnect();
    const project = await Project.create({ title, slug, description, image, link });

    return successResponse(project.toJSON(), undefined, 201);
  } catch (error: unknown) {
    if ((error as Record<string, unknown>)?.code === 11000) return errorResponse('A project with this slug already exists', 409);
    console.error('POST /api/projects error:', error);
    return errorResponse('Internal server error', 500);
  }
}
