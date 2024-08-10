import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <span className="h-10 w-10 mr-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1966px-ITC_Limited_Logo.svg.png"
              alt="ITC Limited Logo"
              className="h-full w-full object-contain"
            />
          </span>
          Business Mart
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-green-700">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-green-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-green-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-green-100"
          >
            Products
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-green-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-green-100"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
