"use client";

import Link from "next/link";
import { deleteSessionToken, ownerToken } from "@/utils/auth";
import { useEffect, useState } from "react";

export default function DropdownMenuLogged({ ref }) {
  const [name, setName] = useState();

  const whoIam = async () => {
    setName(await ownerToken());
  }

  useEffect(() => {
    whoIam();
  })

  return (
    <div
      ref={ref}
      className="absolute bg-[#2b4981] top-full mt-3 w-full flex flex-col gap-2 items-center rounded-xl p-4"
      style={{ boxShadow: 'var(--shadow-dark)' }}
    >
      <Link className="bg-[#0000006b] text-white w-full rounded-full text-lg text-center font-bold" href={`/fraternities/${encodeURIComponent(name)}`}>
        República
      </Link>
      <button
        onClick={deleteSessionToken}
        className="text-white hover:underline"
      >
        Sair
      </button>
    </div>
  );
}
