'use client';

import { useState, useEffect } from 'react';
// import { readDB } from '@/utils/connectionDB';
import getFraternities from '@/utils/getFraternities';

export default function SearchBar() {
  const [filteredFraternities, setfilteredFraternities] = useState([]);

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

  return (
    <div className="flex flex-col items-center justify-center mx-auto relative">
      <div className="flex w-96 gap-4 m-3">
        <input
          onChange={handleChange}
          onBlur={() => setfilteredFraternities([])}
          className="h-10 px-2 flex flex-1 bg-white text-black rounded-full"
          type="text"
          placeholder="Pesquisar"
        />
        <button
          className="h-10 w-10 rounded-full bg-white bg-center"
          style={{
            backgroundImage: 'url(search.svg)',
            backgroundSize: '75%',
            backgroundRepeat: 'no-repeat',
          }}
        ></button>
      </div>
      {filteredFraternities.length > 0 && (
        <div className="w-full bg-[#2b4981] p-6 absolute top-full">
          <ul className="text-white">
            {filteredFraternities.map((fraternity, index) => (
              <li key={index} className="py-1">
                {fraternity.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
