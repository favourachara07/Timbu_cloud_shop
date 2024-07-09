import { NavLink } from "react-router-dom";
import { mainImg } from "./index";
import { productImages } from "./index";

export const Product = () => {
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
              All Timbu Chairs
            </h1>
          </div>
        </div>
      </section>

      <div className="flex justify-evenly">
        <p>Showing 112 Results</p>
        <div className="flex">
          <p className="font-bold mr-4">Sort By:</p>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-bold bg-white border border-gray-300 rounded-[2rem] hover:bg-gray-100 hover:text-gray-700"
          >
            Date
          </a>

          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-bold bg-white border border-gray-300 rounded-[2rem] hover:bg-gray-100 hover:text-gray-700 "
          >
            Price
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-bold bg-white border border-gray-300 rounded-[2rem] hover:bg-gray-100 hover:text-gray-700"
          >
            Relevance
          </a>
        </div>
        <div className="flex">
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 text-sm font-bold bg-white border border-gray-300 rounded-[2rem] hover:bg-gray-100 hover:text-gray-700"
          >
            Reset Filters
          </a>
        </div>
      </div>

      <div className="flex mt-6">
        <ol className="space-y-4 w-72 mx-6">
          <li>
            <div className="w-full p-4 text-white border border-black-300 rounded-[2rem] bg-black">
              <div className="flex items-center justify-between">
                <span className="sr-only">Chair</span>
                <h3 className="font-medium">Chair</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-black border rounded-[2rem] bg-stone-300">
              <div className="flex items-center justify-between">
                <span className="sr-only">Sofa</span>
                <h3 className="font-medium">Sofa</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-black border rounded-[2rem] bg-stone-300">
              <div className="flex items-center justify-between">
                <span className="sr-only">Table</span>
                <h3 className="font-medium">Table</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-black border rounded-[2rem] bg-stone-300">
              <div className="flex items-center justify-between">
                <span className="sr-only">Rug</span>
                <h3 className="font-medium">Rug</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-black border rounded-[2rem] bg-stone-300">
              <div className="flex items-center justify-between">
                <span className="sr-only">Dresser</span>
                <h3 className="font-medium">Dresser</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-black border rounded-[2rem] bg-stone-300">
              <div className="flex items-center justify-between">
                <span className="sr-only">Outdoors</span>
                <h3 className="font-medium">Outdoors</h3>
              </div>
            </div>
          </li>
        </ol>

        <section className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <NavLink to="product-detail" key={index}>
                <div className="max-w-sm rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src={image} // Access the image from the imported module object
                    alt={`Product ${index + 1}`}
                  />
                  <div className="p-4">
                    <p className="font-bold text-lg mb-2">Product {index + 1}</p>
                    <p className="text-gray-600">$ Price</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};