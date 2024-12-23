'use client';

import FormFraternityMember from './FormFraternityMember';
import useAvatar from '@/hooks/useAvatar';
import { deleteFraternityMember, newMemberAvatar } from '@/utils/crudFraternityMembers';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { randomBytes } from 'crypto';

export default function MemberCard({ name, member, seed, editPermission }) {
  const [svg, setSvg] = useState(null);

  const fetchAvatar = async () => {
    const data = await useAvatar(member.seed);
    setSvg(data);
  };

  useEffect(() => {
    if (member.seed) {
      fetchAvatar(member.seed);
    }
  }, []);

  const handleDeleteButton = async () => {
    const res = await deleteFraternityMember(name, member);
    if (res) {
      toast.error(res.error);
    } else {
      window.location.reload();
      toast.success('Membro excluído com sucesso!', { duration: 5000 });
    }
  };
  const handleNewAvatar = async () => {
    const uniqueSeed = randomBytes(16).toString('hex');
    const res = await newMemberAvatar(name, member, uniqueSeed);
    if (res) {
      toast.error(res.error);
    } else {
      const data = await useAvatar(uniqueSeed);
      setSvg(data);
      toast.success('Avatar alterado com sucesso!', { duration: 5000 });
    }
  };
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center py-4 rounded-3xl bg-[#D9D9D9]">
      <Image
        src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
        height={100}
        width={100}
        alt="Avatar do membro"
      ></Image>
      <section className="min-w-[90%] m-4 flex flex-col gap-2">
        <div className="flex justify-center bg-white w-full rounded-full py-1 px-4">
          <span className="text-sm">{member.name}</span>
        </div>
        <div className="flex justify-center bg-white w-full rounded-full py-2 px-4">
          <span className="text-sm">{member.nickname}</span>
        </div>
        <Link href={`https://instagram.com/${member.Insta}`} target="_blank" className="mx-auto">
          <img src="/icons/instagram.svg" alt="" />
        </Link>
      </section>
      {editPermission && (
        <div className="flex flex-wrap ml gap-2">
          <FormFraternityMember action={'edit'} name={name} member={member} />
          <button
            onClick={handleNewAvatar}
            className="rounded-full flex-1 bg-blue px-6 py-1 bg-blue-800 text-white text-sm font-bold"
          >
            Trocar de Avatar
          </button>
          <button
            onClick={handleDeleteButton}
            className="rounded-full flex-1 bg-blue px-6 py-1 bg-red-600 text-white text-sm font-bold"
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
