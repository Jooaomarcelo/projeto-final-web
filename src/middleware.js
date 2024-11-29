import { NextResponse } from 'next/server';
import { isSessionValid } from './utils/auth';

export const config = {
  matcher:
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.css|.*\\.js).*)',
};

const publicRoutes = ['/home', '/login', '/signup'];

export async function middleware(req) {
  const pathName = req.nextUrl.pathname;
  // If the route is public, return the request.
  if (publicRoutes.includes(pathName) || pathName.startsWith("/fraternities")) {
    return NextResponse.next();
  }
  // Else, check if the session is valid.
  const session = await isSessionValid();
  if (session) {
    return NextResponse.next();
  }
  // If the session is invalid, redirect to login.
  return NextResponse.redirect(new URL('/login', req.url));
}