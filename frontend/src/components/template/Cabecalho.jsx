export default function Cabecalho() {
  return (
    <div className="flex flex-col justify-center w-full h-16 fixed bg-blue-600">
      <div className="container flex w-full items-center justify-between">
        <div className="flex w-96 gap-4 items-center justify-between self-center mx-auto">
          <input
            className="h-10 px-2 flex flex-1 bg-white text-black rounded-full"
            type="text"
            placeholder="Pesquisar"
          />
          <button
            className="h-10 w-10 rounded-full bg-white bg-center bg-"
            style={{
              backgroundImage: 'url(search.svg)',
              backgroundSize: '75%',
              backgroundRepeat: 'no-repeat',
            }}
          ></button>
        </div>
        <button
          className="h-10 w-10 rounded-full bg-cover bg-center ml-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(user-unlogged.svg)',
          }}
        ></button>
      </div>
    </div>
  );
}
