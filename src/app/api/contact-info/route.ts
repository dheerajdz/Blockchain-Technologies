import dbConnect from '@/lib/db';
import ContactInfo from '@/models/contactInfo';
import { getCurrentAdmin } from '@/lib/adminAuth';
import { successResponse, errorResponse } from '@/lib/response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    let info = await ContactInfo.findOne().lean();
    
    // Return default if not set
    if (!info) {
      return successResponse({
        email: 'contact@blocksscan.io',
        phone: '+91 (XXX) XXX-XXXX',
        address: 'Mumbai, Maharashtra, India',
        twitter: 'https://x.com/blocksscan',
        linkedin: 'https://linkedin.com/company/blocksscan',
        officeHours: 'Monday – Friday: 9:00 AM – 6:00 PM IST',
      });
    }
    
    return successResponse(info);
  } catch (error) {
    console.error('GET /api/contact-info error:', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function PUT(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return errorResponse('Unauthorized', 401);

    const body = await request.json();
    const { email, phone, address, twitter, linkedin, officeHours } = body || {};

    await dbConnect();
    
    let info = await ContactInfo.findOne();
    
    if (info) {
      info.email = email || info.email;
      info.phone = phone || info.phone;
      info.address = address || info.address;
      info.twitter = twitter || info.twitter;
      info.linkedin = linkedin || info.linkedin;
      info.officeHours = officeHours || info.officeHours;
      await info.save();
    } else {
      info = await ContactInfo.create({
        email: email || 'contact@blocksscan.io',
        phone: phone || '+91 (XXX) XXX-XXXX',
        address: address || 'Mumbai, Maharashtra, India',
        twitter: twitter || '',
        linkedin: linkedin || '',
        officeHours: officeHours || '',
      });
    }

    return successResponse(info.toJSON());
  } catch (error) {
    console.error('PUT /api/contact-info error:', error);
    return errorResponse('Internal server error', 500);
  }
}
