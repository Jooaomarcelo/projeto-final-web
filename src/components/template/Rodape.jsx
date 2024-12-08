import Link from 'next/link';

export default function Rodape() {
  return (
    <footer className="flex flex-col text-white items-center w-full min-h-32 bg-[#3D66B4] p-2 gap-2">
      <h3 className="text-xl font-bold">Desenvolvido por:</h3>
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="https://github.com/Jooaomarcelo" target="_blank">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/HenriUz" target="_blank">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/gebra04" target="_blank">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ValimD" target="_blank">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
      </ul>
      <span className="mt-2">&copy; {new Date().getFullYear()} Todos os direitos reservados</span>
    </footer>
  );
}
