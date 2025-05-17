import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authToken')?.value;

  if (!authToken || authToken !== "demo-auth-token") {
    // Not logged in or invalid token, redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Token is present and valid, allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/earn-bounties/:id', '/talents/:path*', '/post-task/:path*'],
};