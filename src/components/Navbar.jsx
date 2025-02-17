import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-extrabold hover:text-yellow-300">
          Wearluxe
        </Link>

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-yellow-300"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-r-md">Search</button>
        </div>

        <div className="flex space-x-4 items-center">
          <button className="relative" onClick={() => setShowCart(true)}>
            <span className="material-icons">shopping_cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        <ul className={`md:flex items-center space-x-6 absolute md:relative bg-black top-16 left-0 md:top-0 md:left-auto w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
          <li><Link to="/timeline" className="hover:text-yellow-300">Timeline</Link></li>
        </ul>
      </div>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </nav>
  );
};

export default Navbar;
