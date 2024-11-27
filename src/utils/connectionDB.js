'use server';

import { promises as fs } from 'fs';
import path from 'path';

async function readDB() {
  const dbPath = path.join(process.cwd(), 'src', 'data', 'rep.json');
  const data = await fs.readFile(dbPath);

  return JSON.parse(data);
}

async function writeDB(fraternities) {
  const dbPath = path.join(process.cwd(), 'src', 'data', 'rep.json');
  await fs.writeFile(dbPath, JSON.stringify(fraternities, null, 2));
}

export { readDB, writeDB };
