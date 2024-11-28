import * as jose from 'jose';
//npm i jose. The liberary is used to create and verify JWT tokens
// Also it's necessary to install npm i jsonwebtoken
import { cookies } from 'next/headers';

// in ts async function openSessionToken(token: string) instead
async function openSessionToken(token) {
  const uncodedSecret = process.env.TOKEN;

  if (!uncodedSecret) {
    throw new Error('TOKEN environment variable is not defined or is empty');
  }

  const secret = new TextEncoder().encode(process.env.TOKEN);
  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
}

export async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.TOKEN);

  // Creating session token using SHA256 encryption
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h') // set the expiration time to 2 hours
    .sign(secret); // sign the token

  // Takin the expiration time from the token
  const { exp } = await openSessionToken(session);

  // Creating async cookie store
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    expires: exp * 1000, // (exp as number) * 1000 in .ts
    path: '/',
    httpOnly: true,
  });
}

export async function isSessionValid() {
  const sessioncookie = (await cookies()).get('session');

  if (!sessioncookie) {
    return false;
  }

  const { value } = sessioncookie;
  const { exp } = await openSessionToken(value);
  const currentDate = new Date().getTime();

  return exp * 1000 > currentDate;
}
