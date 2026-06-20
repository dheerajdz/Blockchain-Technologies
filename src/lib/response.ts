import { NextResponse } from 'next/server';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
}

export function successResponse<T>(data: T, message?: string, status: number = 200): NextResponse {
  const body: ApiResponse<T> = { success: true, data };
  if (message) body.message = message;
  return NextResponse.json(body, { status });
}

export function errorResponse(message: string, status: number = 500, errors?: Record<string, string[]>): NextResponse {
  const body: ApiResponse = { success: false, error: message };
  if (errors) body.errors = errors;
  return NextResponse.json(body, { status });
}

export function notFoundResponse(resource: string = 'Resource'): NextResponse {
  return errorResponse(`${resource} not found`, 404);
}

export function validationResponse(errors: Record<string, string[]>): NextResponse {
  return errorResponse('Validation failed', 400, errors);
}

export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);
  
  if (error instanceof Error) {
    if (error.name === 'ValidationError') {
      return errorResponse('Validation failed', 400);
    }
    if (error.name === 'CastError') {
      return errorResponse('Invalid ID format', 400);
    }
    if (error.message.includes('E11000')) {
      return errorResponse('Duplicate entry found', 409);
    }
    return errorResponse(error.message, 500);
  }
  
  return errorResponse('An unexpected error occurred', 500);
}
