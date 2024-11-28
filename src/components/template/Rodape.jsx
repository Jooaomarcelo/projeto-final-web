import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="flex flex-col text-white items-center w-full min-h-32 bg-[#3D66B4] p-2 gap-2">
      <h3 className="text-xl font-bold">Desenvolvido por:</h3>
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="#">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="a-user-unlogged"></div>
          </Link>
        </li>
      </ul>
      <span className="mt-2">
        &copy; {new Date().getFullYear()} Todos os direitos reservados
      </span>
    </footer>
  );
}
