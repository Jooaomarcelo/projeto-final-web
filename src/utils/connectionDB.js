import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), '@', 'data', 'rep.json');

async function read() {
  const data = await fs.readFileSync(dbPath);

  return JSON.parse(data);
}

async function write(fraternity) {
  await fs.writeFileSync(dbPath, JSON.stringify(fraternity, null, 2));
}

const connection = {
  read,
  write,
};

export default connection;
