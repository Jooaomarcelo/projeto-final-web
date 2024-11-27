'use client';

import Link from "next/link";
import Carrosel from '@/components/Carrosel';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <>
      <Carrosel>
        <div className="absolute z-10 inset-x-16 inset-y-64 sm:inset-x-16 md:inset-x-32 lg:inset-x-64 flex flex-col items-center justify-center text-[#DBF5E0]">
          <h1 className="text-5xl font-bold text-center">
            Seja Bem Vindo ao Nosso Site
          </h1>
          <span>Descubra a sua República Universitária em Itajubá</span>
          <Link href="#section">
            <div className="mt-5 py-3 px-7 rounded-lg bg-[#DBF5E0] text-black">
              Explorar
            </div>
          </Link>
        </div>
      </Carrosel>
      <div className="flex flex-col container py-7">
        <h2 className="text-black">Sobre Nós</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia
          culpa praesentium optio ut? Veniam nihil eum rerum aliquid cupiditate
          ipsam, expedita voluptate sit provident! Nobis ex exercitationem
          eveniet eligendi.
        </p>
      </div>

      <Explore />
    </>
  );
}
