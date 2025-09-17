import SearchBar from "@/components/SearchBar";
import {User, Menu} from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/70 p-2 z-25 backdrop-blur-md">
      <div className="m-4 flex justify-between space-x-12 text-lg text-white">
        <div className="font-bold text-red-600 text-3xl">
          <div>NETFLIX</div>
        </div>
        <div className="cursor-pointer space-x-5 hidden md:flex">
          <div className="transition hover:font-bold hover:text-red-500">
            Home
          </div>
          <div className="transition hover:font-bold hover:text-red-500">
            Movies
          </div>
          <div className="transition hover:font-bold hover:text-red-500">
            TV Show
          </div>
          <div className="transition hover:font-bold hover:text-red-500">
            My List
          </div>
        </div>
        <div className="flex flex-end space-x-4 items-center">
          <SearchBar />
          <div className="hidden items-center w-full md:flex">
            <User className="w-4 h-4 mr-2"/>
            <span>Login</span>
          </div>
          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
