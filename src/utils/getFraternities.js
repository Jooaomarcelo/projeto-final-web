import { readDB } from '@/utils/connectionDB';

const session = false;

export default async function readFraternities() {
  const fraternities = await readDB();

  let fraternitiesTreated = [];

  if (!session) {
    for (let fraternitie of fraternities) {
      const { id, email, password, members, ...rest } = fraternitie;

      fraternitiesTreated.push(rest);
    }
  } else {
    for (let fraternitie of fraternities) {
      const { id, email, password, ...rest } = fraternitie;

      fraternitiesTreated.push(rest);
    }
  }

  return fraternitiesTreated;
}
