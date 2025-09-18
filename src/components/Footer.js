import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    <div className="p-5 mx-auto max-w-7xl px-4 py-5">
        <div className="grid grid-cols-2 border-t-1 border-gray-500 py-5 text-lg md:grid-cols-4 gap-4 text-sm sm:text-md">
            <div>
                <ul>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Home</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Trending</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">FAQ</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Home</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Trending</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">FAQ</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Home</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Trending</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">FAQ</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Home</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Trending</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">FAQ</a></li>
                    <li className="mb-2"><a className="hover:text-red-500 transition" href="#">Blog</a></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center space-x-4 mt-4 md:justify-start'>
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
        </div>
        <div className='flex justify-between w-full border-t-1 border-gray-500 mt-5 py-2 flex-col items-center text-sm sm:flex-row'>
            <p>Netflix Copyright. All Rights Reserved.</p>
            <p>Privasy policy</p>
        </div>
    </div>
  );
}