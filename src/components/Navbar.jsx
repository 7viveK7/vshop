import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/myntra-logo.png" alt="Myntra" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link to="/products" className="text-gray-700 hover:text-pink-500">MEN</Link>
                <Link to="/products" className="text-gray-700 hover:text-pink-500">WOMEN</Link>
                <Link to="/products" className="text-gray-700 hover:text-pink-500">KIDS</Link>
                <Link to="/products" className="text-gray-700 hover:text-pink-500">HOME & LIVING</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="text-gray-700 hover:text-pink-500">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-pink-500">
              <ShoppingBagIcon className="h-6 w-6" />
            </Link>
            {user ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-pink-500">
                  <UserIcon className="h-6 w-6" />
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    {user.email}
                  </div>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-pink-500">
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;