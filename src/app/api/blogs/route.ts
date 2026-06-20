import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import { rateLimit } from '@/lib/rateLimit';
import { logRequest, createRequestTimer } from '@/lib/logger';
import { successResponse, errorResponse, validationResponse, notFoundResponse, handleApiError } from '@/lib/response';
import Blog, { BlogZodSchema } from '@/models/Blog';

export async function GET(request: NextRequest) {
  const startTime = createRequestTimer();
  let statusCode = 200;

  try {
    const rateLimitResult = await rateLimit(request);
    if (rateLimitResult) {
      statusCode = 429;
      logRequest(request, statusCode, startTime);
      return rateLimitResult;
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '100', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const search = searchParams.get('search');
    const includeDeleted = searchParams.get('includeDeleted') === 'true';

    const query: Record<string, unknown> = {};

    if (!includeDeleted) {
      query.isDeleted = false;
    }

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$text = { $search: search };
    }

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(query),
    ]);

    logRequest(request, statusCode, startTime);
    return successResponse({
      blogs,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  const startTime = createRequestTimer();
  let statusCode = 201;

  try {
    const rateLimitResult = await rateLimit(request);
    if (rateLimitResult) {
      statusCode = 429;
      logRequest(request, statusCode, startTime);
      return rateLimitResult;
    }

    await dbConnect();

    const body = await request.json();
    const validation = BlogZodSchema.safeParse(body);

    if (!validation.success) {
      statusCode = 400;
      const errors = validation.error.flatten().fieldErrors;
      const formattedErrors: Record<string, string[]> = {};
      for (const [key, value] of Object.entries(errors)) {
        if (value) formattedErrors[key] = value;
      }
      logRequest(request, statusCode, startTime);
      return validationResponse(formattedErrors);
    }

    const blog = await Blog.create(validation.data);

    logRequest(request, statusCode, startTime);
    return successResponse(blog, 'Blog created successfully', 201);
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}
