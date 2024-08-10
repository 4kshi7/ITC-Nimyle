import React from 'react';

const Header = () => {
  return (
    <header className="bg-black backdrop-blur-xl text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-400">Nimyle</div>
        {/* <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Categories</a></li>
            <li><a href="#" className="hover:text-green-400">Shop</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
          </ul>
        </nav> */}
        <div className="flex items-center space-x-4">
          <button className="text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;