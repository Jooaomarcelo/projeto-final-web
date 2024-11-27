'use server';

import { promises as fs } from 'fs';
import path from 'path';

async function readDB() {
  const dbPath = path.join(process.cwd(), 'src', 'data', 'rep.json');
  const data = await fs.readFile(dbPath);

  return JSON.parse(data);
}

async function writeDB(fraternity) {
  const dbPath = path.join(process.cwd(), '@', 'data', 'rep.json');
  await fs.writeFile(dbPath, JSON.stringify(fraternity, null, 2));
}

export { readDB, writeDB };
