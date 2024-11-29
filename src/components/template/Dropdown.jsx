'use client';

import DropdownMenuUnlogged from '../DropdownMenuUnlogged';
import DropdownMenuLogged from '../DropdownMenuLogged';
import { useEffect, useState } from 'react';
import { isSessionValid } from '@/utils/auth';

import useDropdown from '../../hooks/useDropdown';
import UserButton from '../UserButton';

export default function Dropdown() {
  const { isOpen, toggleDropdown, dropdownRef, userButtonRef } = useDropdown();
  const [session, setSession] = useState(false);

  const clientVerifySession = async () => {
    try {
      const response = await isSessionValid();

      setSession(response);
    } catch (error) {
      console.log({ error: 'Erro ao validar sessão!' });
    }
  };

  useEffect(() => {
    clientVerifySession();
  }, []);

  return (
    <div className="flex flex-col absolute right-20 w-72 items-center z-50">
      {/* Associate reference */}
      <UserButton
        action={() => {
          toggleDropdown();
        }}
        ref={userButtonRef}
      />
      {!session && isOpen && <DropdownMenuUnlogged ref={dropdownRef} />}

      {session && isOpen && <DropdownMenuLogged ref={dropdownRef} />}
    </div>
  );
}
