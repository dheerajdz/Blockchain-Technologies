import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/response';

export async function GET(_request: NextRequest) {
  try {
    await dbConnect();
    return successResponse({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
    });
  } catch (_error) {
    return errorResponse('Service unhealthy - database connection failed', 503);
  }
}
