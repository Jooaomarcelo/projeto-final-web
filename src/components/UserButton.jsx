'use client';

import { ownerToken } from '@/utils/auth';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserButton({ action, ref }) {
  const [name, setName] = useState();

  const getOwnerSession = async () => {
    const name = await ownerToken();
    setName(name);
  };
  useEffect(() => {
    getOwnerSession();
  }, []);

  return (
    <button className="h-10 w-10 rounded-full bg-cover bg-center" onClick={action} ref={ref}>
      {typeof name === 'string' ? (
        <Image
          src={`/logo-${name.toLowerCase().split(' ')[0]}.png`}
          height={100}
          width={100}
          alt="Usuário deslogado "
          className="rounded-full"
        />
      ) : (
        <Image
          src="/user-unlogged.svg"
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
