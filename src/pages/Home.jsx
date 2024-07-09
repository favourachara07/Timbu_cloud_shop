import { NavLink } from "react-router-dom";
import { images, images2, mainImg } from "../assets/exports";

export const Home = () => {
  return (
    <div>
      <section className="">
        <div className="relative">
          <img
            className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply w-full"
            src={mainImg}
            alt=""
          />
          <div className="absolute bottom-[14%] left-[7rem]">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Crafting Your
            </h1>
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Perfect Haven
            </h1>
          </div>
        </div>
      </section>
      <div className="flex justify-between">
        <div>
          <p className="font-bold mt-20 text-lg ml-10">Discover Unparalleled </p>
          <p className="font-bold text-lg ml-10">Furniture Designs</p>
        </div>
        <div>
          <NavLink to="product">
            <button
              type="button"
              className="mt-20 text-black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
            >
              See all products
            </button>
          </NavLink>
        </div>
      </div>
      <section className="flex justify-center ">
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div key={index} className="max-w-sm m-3 mt-0">
              <img className="w-full rounded-lg" src={image} alt="" />
              <p>Product</p>
              <p>Price</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 mb-32">
        <div className="relative flex justify-center">
          <img className="max-w-[90%] p-4 rounded-lg" src={images2} alt="" />
          <div className="text-white z-10 rounded-lg absolute bottom-0 left-[7rem] bg-black h-[45%] w-[30%] md:left-[5%] lg:left-[10%]">
            <p className="font-medium text-2xl ml-4 mb-2 mt-3">About Funi</p>
            <p className="max-w-[23rem] ml-4">
            Furni redefines modern living through minimalist furniture design. Our collection celebrates simplicity with clean lines, premium natural materials, and thoughtful craftsmanship that strips away the unnecessary. Experience the beauty of intentional, understated elegance in versatile pieces made to elevate any interior space.
            </p>
            <button
                id="ok-btn"
                className="px-4 py-2 ml-4 mt-3 bg-white text-black text-base font-medium rounded-[2rem] w-sm shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900"
              
              >
                <div className="flex justify-center">Contact Us</div>
              </button>
          </div>
        </div>
      </section>
    </div>
  );
};
