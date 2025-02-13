import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function PaymentModal({ isOpen, onClose, amount, onPaymentComplete }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      onPaymentComplete();
      onClose();
      alert('Payment successful! Your order has been placed.');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <h2 className="text-xl font-bold mb-4">Payment Details</h2>
        <p className="text-gray-600 mb-4">Amount to pay: ₹{amount}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              maxLength="16"
              className="w-full border rounded-md px-3 py-2"
              placeholder="1234 5678 9012 3456"
              value={paymentDetails.cardNumber}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16)
              })}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                maxLength="5"
                className="w-full border rounded-md px-3 py-2"
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={(e) => setPaymentDetails({
                  ...paymentDetails,
                  expiryDate: e.target.value
                })}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="password"
                maxLength="3"
                className="w-full border rounded-md px-3 py-2"
                placeholder="123"
                value={paymentDetails.cvv}
                onChange={(e) => setPaymentDetails({
                  ...paymentDetails,
                  cvv: e.target.value.replace(/\D/g, '').slice(0, 3)
                })}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="John Doe"
              value={paymentDetails.name}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                name: e.target.value
              })}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            Pay ₹{amount}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;