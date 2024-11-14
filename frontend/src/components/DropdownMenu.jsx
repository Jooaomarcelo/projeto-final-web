export default function DropdownMenu() {
  return (
    <div className="absolute bg-blue-600 top-full w-full flex flex-col items-center rounded-lg py-4 z-50">
      <div className="flex flex-col items-center mt-2 gap-2">
        <input
          className="w-full p-2 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full mt-2 p-2 rounded-md"
          type="password"
          placeholder="Senha"
        />
        <a className="text-base font-normal hover:underline" href="#">
          Esqueceu senha?
        </a>
        <button
          className="bg-black bg-opacity-70 w-full rounded-full p-2"
          type="submit"
        >
          <span className="text-lg font-bold">Entrar</span>
        </button>
        <a className="text-base font-normal hover:underline" href="#">
          Novo aqui?
        </a>
      </div>
    </div>
  );
}
