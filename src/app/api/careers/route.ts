import dbConnect from '@/lib/db';
import Career from '@/models/career';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const careers = await Career.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .lean();
    return successResponse(careers);
  } catch (error) {
    console.error('GET /api/careers error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const body = await request.json();
    const { title, department, location, type, description, requirements } = body || {};

    if (!title || typeof title !== 'string') return errorResponse('title is required', 400);
    if (!department || typeof department !== 'string') return errorResponse('department is required', 400);
    if (!location || typeof location !== 'string') return errorResponse('location is required', 400);
    if (!type || !['Full-time', 'Part-time', 'Contract', 'Internship'].includes(type)) return errorResponse('type is required (Full-time, Part-time, Contract, Internship)', 400);
    if (!description || typeof description !== 'string') return errorResponse('description is required', 400);

    await dbConnect();
    const career = await Career.create({ title, department, location, type, description, requirements: requirements || [] });

    return successResponse(career.toJSON(), undefined, 201);
  } catch (error) {
    console.error('POST /api/careers error:', error);
    return errorResponse('Internal server error', 500);
  }
}
