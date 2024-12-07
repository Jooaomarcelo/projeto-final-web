'use server';

import { readDB, writeDB } from '@/utils/connectionDB';
import { isSessionValid } from './auth';
import { redirect } from 'next/navigation';
import * as bcrypt from 'bcryptjs';

export async function getFraternity(params = null) {
  const session = await isSessionValid();
  const fraternities = await readDB();
  if (params) {
    // Just one fraternity.
    const fraternity = fraternities.find((frat) => frat.name === params.name);
    /* Checking if the fraternity exists, if it doesn't exist it redirects. */
    if (fraternity) {
      const { id, email, password, members, ...rest } = fraternity;
      return session ? { ...rest, members } : rest;
    } else {
      redirect('/fraternities/Sbornia'); //Sbornia for now.
    }
  } else {
    //All fraternities.
    return fraternities.map((frat) => {
      const { id, email, password, members, ...rest } = frat;
      return session ? { ...rest, members } : rest;
    });
  }
}

export async function updateFraternity(payload) {
  /* Searching fraternity. */
  const fraternities = await readDB();
  for (const frat of fraternities) {
    if (frat.name === payload.name) {
      /* Fraternity found, updating data. */
      frat.address.cep = Number(payload.address.cep);
      frat.address.res_number = Number(payload.address.res_number);
      frat.description = payload.description;
      frat.capacity = Number(payload.capacity);
      frat.min_price = Number(payload.min_price);
      frat.max_price = Number(payload.max_price);
      /* Writing on db. */
      writeDB(fraternities);
      return;
    }
  }
  /* Fraternity not found, returning unexpected error. */
  return { error: 'Um erro inesperado ocorreu!' };
}

export async function createFraternity(fraternities, { name, email, password, number }) {
  /* Creating new fraternity. */
  let id = fraternities.length == 0 ? 1 : fraternities[fraternities.length - 1].id;
  const hashPassword = await bcrypt.hash(password, 10);
  const fraternity = {
    id: ++id,
    name,
    email,
    password: hashPassword,
    whatsapp: number,
    address: {
      "cep": 0,
      "state": "",
      "city": "",
      "neighborhood": "",
      "street": "",
      "res_number": 0
    },
    image: '',
    description: '',
    members: [],
    capacity: 0,
    min_price: 0,
    max_price: 0,
  };
  /* Writing on db. */
  fraternities.push(fraternity);
  await writeDB(fraternities);
}

export async function deleteFraternity(name, password) {
  /* Searching on db. */
  const fraternities = await readDB();
  for (let index = 0; index < fraternities.length; index++) {
    if (fraternities[index].name === name) {
      /* Checking passwords. */
      const match = await bcrypt.compare(password, fraternities[index].password);
      if (match) {
        /* Removing fraternity on db. */
        fraternities.splice(index, 1);
        await writeDB(fraternities);
        return true;
      } else {
        return false;
      }
    }
  }
  /* Fraternity not found, returning false. */
  return false;
}