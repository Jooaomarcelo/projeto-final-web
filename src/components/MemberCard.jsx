'use client';

import FormFraternityMember from './FormFraternityMember';

export default function MemberCard({ member, editPermission }) {
  return (
    <div className="flex gap-4 items-center">
      <img className="w-[6%] h-[6%]" src="/logo-poquito.png" alt="Member image"></img>
      <section>
        <p>Nome: {member.name}</p>
        <p>Apelido: {member.nick}</p>
        <p>Instagram: {member.Insta}</p>
      </section>
      {editPermission && <FormFraternityMember action={'edit'} member={member} />}
    </div>
  );
}
