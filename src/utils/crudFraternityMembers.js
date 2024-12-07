import { readDB, writeDB } from './connectionDB';

export async function createMember(payload, newMember) {
  const fraternities = await readDB();

  for (const frat of fraternities) {
    if (frat.name === payload.name) {
      if (frat.members.length === 0) {
        newMember.id = 1;
        frat.members.push(newMember);
      } else {
        frat.members.forEach((member) => {
          if (member.nickname === newMember.nickname) {
            return { error: `Membro já existe:  ${newMember.nickname}` };
          }
        });
        newMember.id = frat.members[frat.members.length - 1].id + 1;
        frat.members.push(newMember);
      }
      await writeDB(fraternities);
      return;
    }
  }
  /* Fraternity not found, returning unexpected error. */
  return { error: 'Um erro inesperado ocorreu!' };
}

export async function updateFraternityMember(member) {
  const fraternities = await readDB();

  for (const frat of fraternities) {
    for (let fratMember of frat.members) {
      if (fratMember.nickname === member.nickname) {
        fratMember.name = member.name;
        fratMember.nickname = member.nickname;
        fratMember.Insta = member.Insta;
        await writeDB(fraternities);
        return;
      }
    }
  }
  return { error: 'Um erro inesperado ocorreu!' };
}
