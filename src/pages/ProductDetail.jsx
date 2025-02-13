import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = {
    id: 1,
    name: "Men's Wool Sweater",
    brand: "Roadster",
    price: 1299,
    originalPrice: 2599,
    discount: "50% OFF",
    description: "A warm and comfortable wool sweater perfect for winter.",
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Sweaters1.jpg",
      // Add more images
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - View ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.brand}</h1>
            <p className="text-gray-500">{product.name}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">₹{product.price}</span>
            <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-orange-500">{product.discount}</span>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Select Size</h3>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-full border ${
                    selectedSize === size
                      ? 'border-pink-500 text-pink-500'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 flex items-center justify-center space-x-2">
              <ShoppingBagIcon className="h-5 w-5" />
              <span>ADD TO BAG</span>
            </button>
            <button className="flex-1 border border-gray-300 py-3 px-6 rounded-md hover:border-gray-400 flex items-center justify-center space-x-2">
              <HeartIcon className="h-5 w-5" />
              <span>WISHLIST</span>
            </button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Product Details</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;