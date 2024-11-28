import { NextResponse, NextRequest } from 'next/server';
import { isSessionValid } from './utils/auth';
import sessionValid from './utils/sessionValid';

//Esse "matcher" se encontra na própria documentação do next e serve para filtrar arquivos que não devem ser afetados
export const config = {
  matcher:
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.css|.*\\.js).*)',
};

const publicRoutes = ['/home', '/login', '/signup'];

// in ts export async function middleware(req: NextRequest) instead
export async function middleware(req) {
  const pathName = req.nextUrl.pathname;

  // If the route is public, return the request
  if (publicRoutes.includes(pathName)) {
    return NextResponse.next();
  }

  // Else, check if the session is valid
  const session = await isSessionValid();
  if (session) {
    return NextResponse.next();
  }

  // If the session is invalid, redirect to login

  return NextResponse.redirect(new URL('/login', req.url));
}
