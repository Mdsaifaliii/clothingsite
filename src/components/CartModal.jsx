import React from 'react';

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gray-100 p-6 rounded-md shadow-md w-96">
      <h2 className="text-xl font-bold text-primary mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between text-gray-700">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      <button
        onClick={onClose}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
      >
        Close
      </button>
    </div>
  </div>
  
  );
};

export default CartModal;
