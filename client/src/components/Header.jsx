import React from 'react';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-green-600">
            Mother Milk Palace
          </a>
        </div>

        {/* Search Bar Section */}
        <div className="flex-grow mx-10 max-w-2xl hidden md:flex">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          <a href="/cart" className="relative group flex items-center">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-green-600 transition-colors duration-200" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </a>
          <a href="/login" className="group flex items-center">
            <UserIcon className="h-6 w-6 text-gray-600 hover:text-green-600 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
