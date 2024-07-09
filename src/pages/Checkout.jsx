import { mainImg } from "../assets/exports";

export const Checkout = () => {
  return (
    <div>
      <section className="flex-col items-center">
        <div className="relative my-8">
          <div
            className="h-60 mx-6 bg-center rounded-[1.3rem]"
            style={{ backgroundImage: `url(${mainImg})` }}
          ></div>
          {/* <img
            className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply px-6"
            src={mainImg}
            alt=""
          /> */}
          <div className="absolute bottom-[14%] left-[7rem]">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Checkout
            </h1>
          </div>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col md:flex-row">
          <div>
            <ul className="flex  justify-evenly max-w-xl mb-3 mr-3">
              <li className="mr-3">1. Shipping Details</li>
              <li className="mr-3">2. Payment Method</li>
              <li className="mr-3">3. Finalize</li>
            </ul>
            <hr className="mb-4 border-b-1 border-gray-400 max-w-[42rem]" />
            <div className="m-4 mt-6">
              <div className="flex mb-6">
                <input
                  className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-1/10 p-2.5 "
                  type="text"
                  placeholder="First name"
                />
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-1/10 p-2.5"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <input
                className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-[24rem] p-2.5"
                type="text"
                placeholder="Street Address"
              />

              <div className="flex mb-6">
                <input
                  className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-1/10 p-2.5"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-1/10 p-2.5"
                  type="text"
                  placeholder="State"
                />
              </div>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500 block w-1/10 p-2.5"
                type="text"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="ml-44">
            <p>Cart Summary</p>
            <hr className="mb-4 border-b-1 border-gray-400 max-w-[42rem]" />

            <div className="flex justify-between mb-4">
              <img
                className="max-w-[4rem] mr-3 rounded-xl"
                src={mainImg}
                alt=""
              />
              <div className="mr-3">
                <p className="font-medium mb-2">Outdoor Escape</p>
                <span>$499</span>
              </div>

              <span className="text-center">Remove</span>
            </div>

            <hr className=" border-b-1 border-gray-400 max-w-[42rem]" />
            <p className="font-bold text-xl my-2">Order Summary</p>
            <hr className="mb-4 border-b-1 border-gray-400 max-w-[42rem]" />
            <div className="flex justify-between">
              <p>Subtotal</p>
              <span>$499.00</span>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <span>$20.00</span>
            </div>
            <hr className="border-b-1 border-gray-400 max-w-[42rem]" />
            <div className="mt-2 flex justify-between font-bold">
              <p>Total</p>
              <span>$519.00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
