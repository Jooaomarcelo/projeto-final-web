import { readDB } from '@/utils/connectionDB';
import { isSessionValid } from './auth';

export default async function readFraternities() {
  const session = await isSessionValid();
  const fraternities = await readDB();
  let fraternitiesTreated = [];

  if (!session) {
    for (let fraternity of fraternities) {
      const { id, email, password, members, ...rest } = fraternity;

      fraternitiesTreated.push(rest);
    }
  } else {
    for (let fraternity of fraternities) {
      const { id, email, password, ...rest } = fraternity;

      fraternitiesTreated.push(rest);
    }
  }

  return fraternitiesTreated;
}
