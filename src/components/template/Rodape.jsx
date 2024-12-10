import Link from 'next/link';

export default function Rodape() {
  return (
    <footer className="flex flex-col text-white items-center w-full min-h-32 bg-[#3D66B4] p-2 gap-2">
      <h3 className="text-xl font-bold">Desenvolvido por:</h3>
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="https://github.com/Jooaomarcelo" target="_blank" title="João Marcelo">
            <div className="h-20 w-20 rounded-full bg-cover bg-center bg-[url(/devs/zang.jpg)]"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/HenriUz" target="_blank" title="Henrique Zucato">
            <div className="h-20 w-20 rounded-full bg-cover bg-center bg-[url(/devs/videco.jpg)]"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/gebra04" target="_blank" title="Murilo Coelho">
            <div className="h-20 w-20 rounded-full bg-cover bg-[center_top] bg-[url(/devs/zizu.jpg)]"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ValimD" target="_blank" title="Diego Valim">
            <div className="h-20 w-20 rounded-full bg-cover bg-[left_bottom] bg-[url(/devs/mm.jpg)]"></div>
          </Link>
        </li>
      </ul>
      <span className="mt-2">&copy; {new Date().getFullYear()} Todos os direitos reservados</span>
    </footer>
  );
}
