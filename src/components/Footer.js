import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

export default function Footer() {
  return (
    <div className="w-7xl p-5 mx-auto">
        <div className="grid grid-cols-4 border-t-1 border-gray-500 py-5 text-lg">
            <div>
                <ul>
                    <li className="mb-1"><a href="#">Home</a></li>
                    <li className="mb-1"><a href="#">Trending</a></li>
                    <li className="mb-1"><a href="#">FAQ</a></li>
                    <li className="mb-1"><a href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-1"><a href="#">Home</a></li>
                    <li className="mb-1"><a href="#">Trending</a></li>
                    <li className="mb-1"><a href="#">FAQ</a></li>
                    <li className="mb-1"><a href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-1"><a href="#">Home</a></li>
                    <li className="mb-1"><a href="#">Trending</a></li>
                    <li className="mb-1"><a href="#">FAQ</a></li>
                    <li className="mb-1"><a href="#">Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="mb-1"><a href="#">Home</a></li>
                    <li className="mb-1"><a href="#">Trending</a></li>
                    <li className="mb-1"><a href="#">FAQ</a></li>
                    <li className="mb-1"><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className='grid grid-cols-4 gap-1 mt-4'>
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
            </div>
        </div>
        <div className='flex justify-between w-full border-t-1 border-gray-500 mt-5 py-2'>
            <p>Netflix Copyright. All Rights Reserved.</p>
            <p>Privasy policy</p>
        </div>
    </div>
  );
}