export default function SearchBar() {
  return (
    <div className="flex w-96 gap-4 items-center justify-center mx-auto">
      <input
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
  );
}
