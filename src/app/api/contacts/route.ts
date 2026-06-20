import { NextRequest } from 'next/server';
import { successResponse } from '@/lib/response';

export async function GET() {
  return successResponse({ message: 'Contacts API - placeholder' });
}

export async function POST(request: NextRequest) {
  return successResponse({ message: 'Contacts API - placeholder' });
}
