import Dropdown from './Dropdown';
import SearchBar from '../SearchBar';

export default function Cabecalho() {
  return (
    <div className="flex flex-col justify-center w-full h-16 fixed bg-blue-600">
      <div className="container flex w-full items-center">
        <SearchBar />
        <Dropdown />
      </div>
    </div>
  );
}
