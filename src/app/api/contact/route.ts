import dbConnect from '@/lib/db';
import Contact from '@/models/contact';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || typeof name !== 'string') return errorResponse('name is required', 400);
    if (!email || typeof email !== 'string') return errorResponse('email is required', 400);
    if (!message || typeof message !== 'string') return errorResponse('message is required', 400);

    await dbConnect();
    const contact = await Contact.create({ name, email, message });

    return successResponse(contact.toJSON(), undefined, 201);
  } catch (error) {
    console.error('POST /api/contact error:', error);
    return errorResponse('Internal server error', 500);
  }
}
