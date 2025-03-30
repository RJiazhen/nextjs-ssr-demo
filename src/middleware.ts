import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface ErrorResponse {
  message: string;
  status: number;
  timestamp: string;
}

// Logger middleware
export async function middleware(request: NextRequest) {
  try {
    // Start timing the request
    const startTime = Date.now();

    // Log incoming request
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.url}`,
    );

    // Get response
    const response = NextResponse.next();

    // Log response
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.url} - ${
        response.status
      } (${duration}ms)`,
    );

    return response;
  } catch (error) {
    // Log the error
    console.error(
      `[${new Date().toISOString()}] ERROR: ${request.method} ${request.url}`,
      error,
    );

    // Create error response
    const errorResponse: ErrorResponse = {
      message: error instanceof Error ? error.message : 'Internal Server Error',
      status: 500,
      timestamp: new Date().toISOString(),
    };

    // Return error response
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
