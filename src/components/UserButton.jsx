'use client';

import { ownerToken } from '@/utils/auth';
import { getFraternity } from '@/utils/crudFraternities';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserButton({ action, ref }) {
  const [name, setName] = useState();
  const [data, setData] = useState({ name: "", image: "" });

  const getOwnerSession = async () => {
    const name = await ownerToken();
    //setName(name);

    const fraternity = await getFraternity({ name });
    if (fraternity) {
      setData({ name: fraternity.name, image: fraternity.image });
    } else {
      setData({ name: "", image: "" });
    }
  };

  useEffect(() => {
    getOwnerSession();
    console.log(data);
  }, []);

  return (
    <button className="h-10 w-10 rounded-full bg-cover bg-center" onClick={action} ref={ref}>
      {(data.image !== "") ? (
        <Image
          src={data.image != "" ? data.image : "/icons/user-unlogged.svg"}
          height={100}
          width={100}
          alt="Usuário logado "
          className="rounded-full"
        />
      ) : (
        <Image
          src="/icons/user-unlogged.svg"
          height={100}
          width={100}
          alt="Usuário deslogado "
          className="rounded-full"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))',
          }}
        />
      )}
    </button>
  );
}
