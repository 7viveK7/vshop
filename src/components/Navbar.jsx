import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.auth.cartList);

  

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
         
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-green-500">Brand</Link>   
                <Link to="/" className="text-gray-700 hover:text-green-500">Text</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-gray-700 hover:text-green-500">
            <div className='flex flex-row'>
              <ShoppingBagIcon className="h-6 w-6" /> 
              <span>{cartItems.length && cartItems.length}</span>
              </div>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;