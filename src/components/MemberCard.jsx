'use client';

import FormFraternityMember from './FormFraternityMember';
import { deleteFraternityMember } from '../utils/crudFraternityMembers';
import toast, { Toaster } from 'react-hot-toast';

export default function MemberCard({ member, editPermission }) {
  const handleDeleteButton = async () => {
    const res = await deleteFraternityMember(member);
    if (res) {
      toast.error(res.error);
    } else {
      toast.success('Membro excluído com sucesso!', { duration: 5000 });
      window.location.reload();
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <img className="w-[6%] h-[6%]" src="/logo-poquito.png" alt="Member image"></img>
      <section key={member.id}>
        <p>Nome: {member.name}</p>
        <p>Apelido: {member.nick}</p>
        <p>Instagram: {member.Insta}</p>
      </section>
      {editPermission && <FormFraternityMember action={'edit'} member={member} />}
      <button onClick={handleDeleteButton} className="rounded-full bg-blue px-6 py-2 bg-red-600 text-white font-bold">
        Excluir
      </button>
      <Toaster></Toaster>
    </div>
  );
}
