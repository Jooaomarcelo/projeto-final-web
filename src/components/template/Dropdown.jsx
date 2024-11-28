'use client';

import useDropdown from '../../hooks/useDropdown';
import UserButton from '../UserButton';
import DropdownMenu from '../DropdownMenuUnlogged';
import { useEffect, useState } from 'react';

export default function Dropdown() {
  const { isOpen, toggleDropdown, dropdownRef, userButtonRef } = useDropdown();
  const [session, setSession] = useState(false);

  const verifySession = async () => {
    try {
      const response = await fetch('/api/verify-session');
      console.log(response);

      if (!response.ok) {
        setSession(false);
        throw new Error('Failed to verify session');
      }

      const data = await response.json();

      setSession(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect para chamar verifySession apenas uma vez quando o componente for montado
  useEffect(() => {
    verifySession();
  }, []); // O array vazio [] garante que isso aconteça apenas na montagem do componente

  return (
    <div className="flex flex-col absolute right-20 w-72 items-center z-50">
      {/* Associate reference */}
      <UserButton
        action={() => {
          toggleDropdown();
        }}
        ref={userButtonRef}
      />
      {!session && isOpen && <DropdownMenu ref={dropdownRef} />}
    </div>
  );
}
