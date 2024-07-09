import { useState } from "react";
import { Cart } from "../assets/exports";
import CartModal from "./CartModal";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseModal = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mx-4">
  
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Timbu
                </span>
            
            </div>
            <div className="flex flex-row items-center space-x-4 md:space-x-6 lg:space-x-8">
              <ul className="flex flex-col md:flex-row font-medium mt-0 space-y-2 md:space-y-0 md:space-x-4 lg:space-x-8 text-sm">
                <li>
                  <NavLink
                    to="/home"
                    className="text-gray-900 hover:underline"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/collections"
                    className="text-gray-900 hover:underline"
                  >
                    Collections
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/clearance"
                    className="text-gray-900 hover:underline"
                  >
                    Clearance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-gray-900 hover:underline"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <img
                onClick={handleCartClick}
                src={Cart}
                alt="Cart"
                className="cursor-pointer"
              />
              <p className="font-medium text-sm">EN</p>
              <button
                type="button"
                className="text-white bg-sky-950 font-medium rounded-lg text-sm px-4 py-1"
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </header>
      <CartModal show={isCartOpen} onClose={handleCloseModal} />
    </>
  );
};
