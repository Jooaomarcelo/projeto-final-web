'use server';

import * as jose from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function openSessionToken(token) {
  const secret = new TextEncoder().encode(process.env.TOKEN);
  const { payload } = await jose.jwtVerify(token, secret);
  return payload;
}

export async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.TOKEN);
  /* Creating session token using SHA256 encryption. */
  const session = await new jose.SignJWT(payload).setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h') // set the expiration time to 2 hours
    .sign(secret); // sign the token
  /* Takin the expiration time from the token. */
  const { exp } = await openSessionToken(session);
  /* Creating async cookie store. */
  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    expires: exp * 1000, // (exp as number) * 1000 in .ts
    path: '/',
    httpOnly: true,
  });
}

export async function deleteSessionToken() {
  (await cookies()).delete('session');
  redirect('/login');
}

export async function isSessionValid() {
  /* Checking cookie. */
  const sessioncookie = (await cookies()).get('session');
  if (!sessioncookie) {
    return false;
  }
  /* Checking time. */
  const { value } = sessioncookie;
  const { exp } = await openSessionToken(value);
  const currentDate = new Date().getTime();
  return (exp * 1000) > currentDate;
}
