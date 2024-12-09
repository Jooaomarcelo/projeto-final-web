import { readDB, writeDB } from './connectionDB';

export async function createMember(payload, newMember) {
  const fraternities = await readDB();

  for (const frat of fraternities) {
    if (frat.name === payload.name) {
      if (frat.members.length === 0) {
        newMember.id = 1;
        newMember.seed = newMember.nickname;
        frat.members.push(newMember);
      } else {
        frat.members.forEach((member) => {
          if (member.nickname === newMember.nickname) {
            return { error: `Membro já existe:  ${newMember.nickname}` };
          }
        });
        newMember.seed = newMember.nickname;
        newMember.id = frat.members[frat.members.length - 1].id + 1;
        frat.members.push(newMember);
      }
      await writeDB(fraternities);
      return;
    }
  }

  return { error: 'Um erro inesperado ocorreu!' };
}

export async function updateFraternityMember(name, membro) {
  const fraternities = await readDB();

  for (let frat of fraternities) {
    if (frat.name === name) {
      const index = frat.members.findIndex((m) => m.id === membro.id);
      if (index !== -1) {
        frat.members[index] = { ...membro };
        await writeDB(fraternities);
        return;
      }
    }
  }

  return { error: 'Um erro inesperado ocorreu!' };
}

export async function deleteFraternityMember(name, member) {
  const fraternities = await readDB();

  for (let frat of fraternities) {
    if (frat.name === name) {
      const index = frat.members.findIndex((m) => m.id === member.id);
      if (index !== -1) {
        frat.members.splice(index, 1);
        await writeDB(fraternities);
        return;
      }
    }
  }

  return { error: 'Um erro inesperado ocorreu!' };
}

export async function newMemberAvatar(name, member, seed) {
  const fraternities = await readDB();

  for (let frat of fraternities) {
    if (frat.name === name) {
      const index = frat.members.findIndex((m) => m.id === member.id);
      if (index !== -1) {
        frat.members[index].seed = seed;
        await writeDB(fraternities);
        return;
      }
    }
  }

  return { error: 'Um erro inesperado ocorreu!' };
}
