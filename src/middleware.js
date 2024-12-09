import { NextResponse } from 'next/server';
import { isAdmin, isSessionValid } from './utils/auth';

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
  // Else, check if the session is valid and admin.
  const session = await isSessionValid();
  const admin = await isAdmin();
  if (session && admin) {
    return NextResponse.next();
  }
  // If the session is invalid or the user is not an admin, redirect to login.
  return NextResponse.redirect(new URL('/login', req.url));
}