'use client';

import { useState } from 'react';

import UserButton from '../UserButton';
import DropdownMenu from '../DropdownMenu';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col absolute right-20 w-72 items-center">
      <UserButton action={toggleDropdown} />
      {isOpen && <DropdownMenu />}
    </div>
  );
}
