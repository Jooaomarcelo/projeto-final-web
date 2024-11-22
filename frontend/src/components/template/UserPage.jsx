'use client';

import { useRouter } from "next/navigation";

export default function UserPage({ children }) {
  const router = useRouter();

  return (
    <section className="flex justify-around bg-[url(/unifei.jpg)] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
      <div className="relative z-10 h-screen flex items-center">
        <button
          className="text-2xl text-white font-bold py-8 px-16 rounded-full bg-black/60"
          onClick={() => router.push("/home")}
        >
          Explorar Repúblicas
        </button>
      </div>
      <div className="relative z-10 h-screen flex items-center">{children}</div>
    </section>
  );
}
