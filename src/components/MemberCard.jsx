'use client';

import FormFraternityMember from './FormFraternityMember';
import { deleteFraternityMember } from '../utils/crudFraternityMembers';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="w-[80%] mx-auto flex flex-col items-center py-4 rounded-3xl bg-[#D9D9D9]">
      <Image src={'/logo-poquito.png'} height={100} width={100} alt="logo-rep"></Image>
      <section className="min-w-[90%] m-4 flex flex-col gap-2">
        <div className="bg-white w-full rounded-full py-1 px-4">
          <span className="text-sm">Nome: {member.name}</span>
        </div>
        <div className="bg-white w-full rounded-full py-2 px-4">
          <span className="text-sm">Apelido: {member.nickname}</span>
        </div>
        <Link href={`https://instagram.com/${member.Insta}`} target="_blank" className="mx-auto">
          <img src="/instagram.svg" alt="" />
        </Link>
      </section>
      {editPermission && (
        <div className="flex flex-wrap ml gap-2">
          <FormFraternityMember action={'edit'} member={member} />
          <button
            onClick={handleDeleteButton}
            className="rounded-full flex-1 bg-blue px-6 py-1 bg-red-600 text-white text-sm font-bold"
          >
            Excluir
          </button>
        </div>
      )}
      <Toaster></Toaster>
    </div>
  );
}
