import React from "react";

const CartModal = ({ cartItems, onClose, onRemove }) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Your Cart
        </h2>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            <ul className="space-y-3">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="font-bold text-gray-800">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Summary Section */}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total Price:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;