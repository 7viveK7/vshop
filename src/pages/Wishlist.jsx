import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "Men's Wool Sweater",
      brand: "Roadster",
      price: 1299,
      originalPrice: 2599,
      discount: "50% OFF",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Sweaters1.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100">
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{item.brand}</h3>
              <p className="text-gray-500 text-sm">{item.name}</p>
              <div className="mt-2 flex items-center">
                <span className="font-semibold">₹{item.price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                <span className="ml-2 text-sm text-orange-500">{item.discount}</span>
              </div>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-pink-600">
                <ShoppingBagIcon className="h-5 w-5" />
                <span>MOVE TO BAG</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;