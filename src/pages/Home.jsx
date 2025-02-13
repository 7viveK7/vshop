import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-3573-4d8c-b4c6-b82667df5b791706728394399-Desktop-Banner.jpg"
            alt="Banner"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-xl font-bold">New Arrivals</h3>
            <Link to="/products" className="text-white hover:text-pink-300">Shop Now →</Link>
          </div>
        </div>
        {/* Add more promotional sections as needed */}
      </div>
    </div>
  );
}

export default Home;