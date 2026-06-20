import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import { rateLimit } from '@/lib/rateLimit';
import { logRequest, createRequestTimer } from '@/lib/logger';
import { successResponse, errorResponse, validationResponse, notFoundResponse, handleApiError } from '@/lib/response';
import Team, { TeamZodSchema } from '@/models/Team';

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
    const role = searchParams.get('role');
    const limit = parseInt(searchParams.get('limit') || '100', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const includeDeleted = searchParams.get('includeDeleted') === 'true';

    const query: Record<string, unknown> = {};

    if (!includeDeleted) {
      query.isDeleted = false;
    }

    if (role) {
      query.role = role;
    }

    const skip = (page - 1) * limit;

    const [teams, total] = await Promise.all([
      Team.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Team.countDocuments(query),
    ]);

    logRequest(request, statusCode, startTime);
    return successResponse({
      teams,
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
    const validation = TeamZodSchema.safeParse(body);

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

    const team = await Team.create(validation.data);

    logRequest(request, statusCode, startTime);
    return successResponse(team, 'Team member created successfully', 201);
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}
