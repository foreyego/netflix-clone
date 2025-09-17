import {Search} from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center w-full bg-gray-800 px-6 py-2 rounded-md">
        <Search className='w-4 h-4 mr-2 text-gray-400'/>
        <input type="text" placeholder="Search Movies.." className="text-white placeholder-gray-400 w-full text-sm outline-none"/>
    </div>
  )
}