"use server";

import { readDB } from '@/utils/connectionDB';
import { isSessionValid } from './auth';
import { redirect } from 'next/navigation';

export default async function readFraternities(params = null) {
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
      redirect("/fraternities/Sbornia"); //Sbornia for now.
    }
  } else {
    //All fraternities.
    return fraternities.map(frat => {
      const { id, email, password, members, ...rest } = frat;
      return session ? { ...rest, members } : rest;
    });
  }
}
