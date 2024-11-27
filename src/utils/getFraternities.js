import { readDB } from '@/utils/connectionDB';

const session = false;

export default async function readFraternities() {
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
