import Dropdown from './Dropdown';
import SearchBar from '../SearchBar';
import HomeButton from '../HomeButton';

export default function Cabecalho() {
  return (
    <div className="flex flex-col justify-center w-full h-16 fixed z-50 bg-[#2b4981]">
      {/* <div className=" absolute  left-[20%] h-12 w-12">
      </div> */}
      <div className="container flex w-full items-center">
        <HomeButton />
        <SearchBar />
        <Dropdown />
      </div>
    </div>
  );
}
