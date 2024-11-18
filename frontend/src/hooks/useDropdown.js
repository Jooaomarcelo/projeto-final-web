import { useState, useRef, useEffect } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    // Close dropdown menu if user clicks outside of it
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !userButtonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleSwiperInteraction = (event) => {
    // Close dropdown menu if user interacts with Swiper
    if (event.target.closest('.swiper')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('pointerdown', handleSwiperInteraction);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('pointerdown', handleSwiperInteraction);
    };
  }, [dropdownRef, userButtonRef]);

  return {
    isOpen,
    toggleDropdown,
    dropdownRef,
    userButtonRef,
  };
};

export default useDropdown;
