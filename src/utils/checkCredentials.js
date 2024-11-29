'use server';

import { createSessionToken } from './auth';
import { readDB, writeDB } from './connectionDB';
import * as bcrypt from 'bcryptjs';

export async function createFraternity({ name, email, password, number }) {
  /* Building new fraternity. */
  const fraternities = await readDB();
  let id = fraternities.length == 0 ? 1 : fraternities[fraternities.length - 1].id;
  const hashPassword = await bcrypt.hash(password, 10);
  const fraternity = {
    id: ++id,
    name,
    email,
    password: hashPassword,
    whatsapp: number,
    address: '',
    image: '',
    description: '',
    members: [],
    capacity: 0,
    min_price: 0,
    max_price: 0,
  };
  /* Checking conditions. */
  for (const frat of fraternities) {
    if (frat.name === name) return { error: 'Esse usuário já existe!' };
    else if (frat.email === email) return { error: 'Um erro inesperado ocorreu!' };
  }
  /* Writing on db. */
  fraternities.push(fraternity);
  writeDB(fraternities);
}

export async function loginFraternity({ email, password }) {
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
