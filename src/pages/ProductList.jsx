import { HeartIcon, ShoppingBagIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartList } from '../store/authSlice';
import { getProducts } from '../store/productsSlice';

// const products = [
//   {
//     id: 1,
//     name: "Men's Wool Sweater",
//     brand: "Roadster",
//     price: 1299,
//     originalPrice: 2599,
//     discount: "50% OFF",
//     image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Sweaters1.jpg"
//   },
//   // Add more products here
// ];

function ProductList() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    priceRange: 'all',
    brand: 'all',
    discount: 'all'
  });
const {data:products  }=useSelector(state=>state.products)
  useEffect(() => {

dispatch(getProducts())
  }, [])



  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        {/* <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <select
                className="w-full border rounded p-2"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="all">All Prices</option>
                <option value="0-1000">Under ₹1000</option>
                <option value="1000-2000">₹1000 - ₹2000</option>
                <option value="2000+">Above ₹2000</option>
              </select>
            </div>
                    </div>
        </div> */}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 line-clamp-2" >{product.title}</h3>
                    <p className="text-gray-500 text-sm">{product.name}</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">₹{product.price}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">₹{product.price + 100}</span>
                      <span className="ml-2 text-sm text-orange-500">{"10%"}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={(e) => {
                      e.preventDefault()
                      dispatch(setCartList(product))
                    }} className="flex-1 bg-pink-500 text-white py-2 px-2 rounded-md hover:bg-pink-600 flex items-center justify-center space-x-2">
                      <ShoppingBagIcon className="h-5 w-5" />
                      <span>ADD TO BAG</span>
                    </button>
                    {/* <button className="flex-1 border border-gray-300 py-3 px-6 rounded-md hover:border-gray-400 flex items-center justify-center space-x-2">
              <HeartIcon className="h-5 w-5" />
              <span>WISHLIST</span>
            </button> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;