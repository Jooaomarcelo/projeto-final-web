'use client';

import { ownerToken } from '@/utils/auth';
import { getFraternity } from '@/utils/crudFraternities';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserButton({ action, ref }) {
  const [data, setData] = useState({ name: "", image: "" });

  const getOwnerSession = async () => {
    const name = await ownerToken();
    if (typeof name === "string") {
      const fraternity = await getFraternity({ name });
      setData({ name: fraternity.name, image: fraternity.image });
    }
  };

  useEffect(() => {
    getOwnerSession();
  }, []);

  return (
    <button className="h-10 w-10 rounded-full bg-cover bg-center" onClick={action} ref={ref}>
      <Image
        src={data.image !== "" ? data.image : "/icons/user-unlogged.svg"}
        height={100}
        width={100}
        alt="Usuário deslogado "
        className="rounded-full"
      />
    </button>
  );
}
