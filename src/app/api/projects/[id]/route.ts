import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import { rateLimit } from '@/lib/rateLimit';
import { logRequest, createRequestTimer } from '@/lib/logger';
import { successResponse, errorResponse, validationResponse, notFoundResponse, handleApiError } from '@/lib/response';
import Project, { ProjectZodSchema } from '@/models/Project';
import mongoose from 'mongoose';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
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
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      statusCode = 400;
      logRequest(request, statusCode, startTime);
      return errorResponse('Invalid project ID format', 400);
    }

    const project = await Project.findOne({ _id: id, isDeleted: false }).lean();

    if (!project) {
      statusCode = 404;
      logRequest(request, statusCode, startTime);
      return notFoundResponse('Project');
    }

    logRequest(request, statusCode, startTime);
    return successResponse(project);
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
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
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      statusCode = 400;
      logRequest(request, statusCode, startTime);
      return errorResponse('Invalid project ID format', 400);
    }

    const body = await request.json();
    const validation = ProjectZodSchema.partial().safeParse(body);

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

    const project = await Project.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { $set: validation.data },
      { new: true, runValidators: true }
    ).lean();

    if (!project) {
      statusCode = 404;
      logRequest(request, statusCode, startTime);
      return notFoundResponse('Project');
    }

    logRequest(request, statusCode, startTime);
    return successResponse(project, 'Project updated successfully');
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
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
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      statusCode = 400;
      logRequest(request, statusCode, startTime);
      return errorResponse('Invalid project ID format', 400);
    }

    const project = await Project.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { $set: { isDeleted: true, deletedAt: new Date() } },
      { new: true }
    ).lean();

    if (!project) {
      statusCode = 404;
      logRequest(request, statusCode, startTime);
      return notFoundResponse('Project');
    }

    logRequest(request, statusCode, startTime);
    return successResponse(null, 'Project deleted successfully');
  } catch (error) {
    statusCode = 500;
    logRequest(request, statusCode, startTime);
    return handleApiError(error);
  }
}
