import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

import { useSelector } from 'react-redux';

function Cart() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.auth.cartList);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePaymentComplete = () => {
    // Here you would typically:
    // 1. Clear the cart
    // 2. Create an order
    // 3. Redirect to order confirmation page
    console.log('Payment completed');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Bag</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.brand}</h3>
                <p className="text-gray-500">{item.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <select
                    value={item.quantity}
                    className="border rounded p-1"
                    onChange={() => {}}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        Qty: {num}
                      </option>
                    ))}
                  </select>
                  <button className="text-gray-500 hover:text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

     
      </div>

    </div>
  );
}

export default Cart;