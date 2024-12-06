'use server';

import { createSessionToken } from './auth';
import { readDB } from './connectionDB';
import * as bcrypt from 'bcryptjs';
import { createFraternity } from './crudFraternities';

export async function checkSignUpCredentials({ name, email, password, number }) {
  /* Building new fraternity. */
  const fraternities = await readDB();
  /* Checking conditions. */
  for (const frat of fraternities) {
    if (frat.name === name) return { error: 'Esse usuário já existe!' };
    else if (frat.email === email) return { error: 'Um erro inesperado ocorreu!' };
  }
  /* Creating new fraternity. */
  await createFraternity(fraternities, { name, email, password, number });
}

export async function checkLoginCredentials({ email, password }) {
  /* Searching fraternity. */
  const fraternities = await readDB();
  const fraternity = fraternities.find((frat) => frat.email === email);
  if (fraternity) {
    /* Checking password. */
    const match = await bcrypt.compare(password, fraternity.password);
    if (match) {
      await createSessionToken({ name: fraternity.name, email: email });
      return;
    }
  }
  return { error: 'E-mail ou senha incorretos!' };
}
