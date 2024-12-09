import Link from 'next/link';
import Carrosel from '@/components/Carrosel';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 h-screen">
        <Carrosel>
          <div className="absolute z-10 inset-x-16 inset-y-64 sm:inset-x-16 md:inset-x-32 lg:inset-x-64 flex flex-col items-center justify-center text-[#DBF5E0]">
            <h1 className="text-5xl font-bold text-center">Seja Bem Vindo ao Nosso Site</h1>
            <span>Descubra a sua República Universitária em Itajubá</span>
            <Link href="#explore">
              <div className="mt-5 py-3 px-7 rounded-lg bg-[#DBF5E0] text-black">Explorar</div>
            </Link>
          </div>
        </Carrosel>
        <div className="flex flex-col justify-center container py-4">
          <h2 className="text-black">Sobre Nós</h2>
          <p className="text-black">
            Bem-vindo ao Nosso Site, o seu portal dedicado à conexão entre estudantes e repúblicas! Sabemos que encontrar o lar perfeito durante a vida acadêmica pode ser um desafio, e é por isso que criamos uma plataforma simples, prática e confiável para facilitar essa jornada.
          </p>
        </div>
      </div>
      <Explore />
    </>
  );
}
