import { RateLimiterMemory } from 'rate-limiter-flexible';
import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from './response';

const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'api_middleware',
  points: 30, // 30 requests
  duration: 60, // per 60 seconds
});

const strictRateLimiter = new RateLimiterMemory({
  keyPrefix: 'api_write',
  points: 10, // 10 write requests
  duration: 60, // per 60 seconds
});

export async function rateLimit(request: NextRequest): Promise<NextResponse | null> {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  const method = request.method;
  
  try {
    const limiter = ['POST', 'PUT', 'DELETE'].includes(method) ? strictRateLimiter : rateLimiter;
    await limiter.consume(ip);
    return null;
  } catch {
    return errorResponse('Too many requests. Please try again later.', 429);
  }
}
