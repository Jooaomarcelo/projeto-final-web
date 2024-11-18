'use client';

import useDropdown from '../../hooks/useDropdown';
import UserButton from '../UserButton';
import DropdownMenu from '../DropdownMenu';

export default function Dropdown() {
  const { isOpen, toggleDropdown, dropdownRef, userButtonRef } = useDropdown();

  return (
    <div className="flex flex-col absolute right-20 w-72 items-center z-50">
      {/* Associate reference */}
      <UserButton action={toggleDropdown} ref={userButtonRef} />
      {isOpen && <DropdownMenu ref={dropdownRef} />}
    </div>
  );
}
