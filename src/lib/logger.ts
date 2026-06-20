import { NextRequest } from 'next/server';

interface LogData {
  method: string;
  url: string;
  ip: string;
  userAgent?: string;
  statusCode: number;
  duration: number;
  timestamp: string;
}

export function logRequest(request: NextRequest, statusCode: number, startTime: number): void {
  const duration = Date.now() - startTime;
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  
  const logData: LogData = {
    method: request.method,
    url: request.url,
    ip,
    userAgent: request.headers.get('user-agent') || undefined,
    statusCode,
    duration,
    timestamp: new Date().toISOString(),
  };

  console.log(JSON.stringify(logData));
}

export function createRequestTimer(): number {
  return Date.now();
}
