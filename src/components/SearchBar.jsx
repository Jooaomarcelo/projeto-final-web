'use client';

import { useState, useEffect, useRef } from 'react';
// import { readDB } from '@/utils/connectionDB';
import getFraternities from '@/utils/getFraternities';
import Image from 'next/image';
import Link from 'next/link';
import { doc } from 'prettier';

export default function SearchBar() {
  const [filteredFraternities, setfilteredFraternities] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchBarRef = useRef(null);

  const handleChange = async (event) => {
    const data = await getFraternities();

    const newTarget = event.target.value.trim();

    let filtered;

    if (newTarget === '') {
      filtered = [];
    } else {
      filtered = data.filter((fraternity) => fraternity.name.toLowerCase().includes(newTarget.toLowerCase()));
    }

    setfilteredFraternities(filtered);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Remover o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="flex flex-col items-center justify-center mx-auto relative">
      <div className="flex w-96 gap-4 m-3">
        <input
          onChange={handleChange}
          onFocus={handleFocus}
          className="h-10 px-2 flex flex-1 bg-white text-black rounded-full"
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      {isFocused && filteredFraternities.length > 0 && (
        <div className="w-full bg-[#1e355f] px-2 py-4 absolute top-full rounded-b-lg">
          <ul className="flex flex-col gap-2">
            {filteredFraternities.map((fraternity, index) => (
              <li key={index} className=" bg-[#0b15272f] text-white rounded-lg">
                <Link
                  href={`/fraternities/${fraternity.name}`}
                  target="_blank"
                  className="flex gap-2 items-center p-4 rounded-lg hover:bg-[#0b1527]"
                >
                  <div className="h-12 w-12">
                    <Image
                      src={fraternity.image || null}
                      height={100}
                      width={100}
                      alt={`Logo ${fraternity.name}`}
                      className="object-cover"
                    />
                  </div>
                  <span>{fraternity.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
