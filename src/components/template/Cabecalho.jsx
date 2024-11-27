import Dropdown from './Dropdown';
import SearchBar from '../SearchBar';

export default function Cabecalho() {
  return (
    <div className="flex flex-col justify-center w-full h-16 fixed z-50 bg-[#2b4981]">
      <div className="container flex w-full items-center">
        <SearchBar />
        <Dropdown />
      </div>
    </div>
  );
}
