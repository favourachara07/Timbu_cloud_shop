import { Close } from "../assets/exports";
import image from "../assets/Timbu Shop Images/flux acaddemy/fluxacademy_a_minimalist_style_kitchen_chair_in_the_style_of_au_71a96c18-bee5-42cb-a5b1-89bd353b0827.png";
import right from "../assets/Timbu Shop Images/flux acaddemy/Arrow Right.svg";
import { NavLink } from "react-router-dom";


const CartModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="z-20 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Cart</h3>
            <img onClick={onClose} src={Close} alt="" />
          </div>
          <div className=" flex justify-evenly mt-2 px-7 py-3">
            <div className="flex flex-row mr-16 text-center">
              <img src={image} className="max-w-[5rem] rounded-lg" alt="" />
              <div>
                <p className="text-sm text-gray-500">Outdoor Escape</p>
                <p>$499</p>
              </div>
            </div>
            <p>Remove</p>
          </div>
          <hr className="w-18 bg-black text-black mt-4" />

          <div className="items-center px-4 py-3">
            <div className="flex justify-between mb-4 font-bold">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">$499</p>
            </div>
          <input type="email" id="email" className="bg-gray-300 mb-2 border border-gray-200 text-gray-900 text-sm rounded-[2rem]  block w-full p-2.5 " placeholder="Coupon Code" required />

            <NavLink to="checkout">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-black text-white text-base font-medium rounded-[2rem] w-full shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900"
              
              >
                <div className="flex justify-center">Proceed to Checkout <img className="ml-4" src={right} alt="" /></div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
