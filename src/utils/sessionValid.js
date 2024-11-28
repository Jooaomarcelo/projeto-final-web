'use server';

import { isSessionValid } from './auth';

export default async function sessionValid() {
  return await isSessionValid();
}
