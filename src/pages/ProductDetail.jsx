import image from "../assets/Timbu Shop Images/flux acaddemy/fluxacademy_a_minimalist_style_kitchen_chair_in_the_style_of_au_71a96c18-bee5-42cb-a5b1-89bd353b0827.png";
import { productDetailImage } from "./index";
import up from "../assets/Timbu Shop Images/flux acaddemy/Arrow Up.svg"
import down from "../assets/Timbu Shop Images/flux acaddemy/Arrow Down.svg"
import { useState } from "react";

export const ProductDetail = () => {
  const [num,setNum]=useState(1)
  return (
    <section className="">
      <div className="flex justify-evenly">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight leading-none text-black">
            The Summer
          </h1>
          <h1 className="text-3xl font-bold tracking-tight leading-none text-black mb-8">
            Solstice
          </h1>

          <div className="flex">
            Color:
            <span>
              <button
                type="button"
                className="ml-3 text-white bg-red-600 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2"
              >
                Terracotta
              </button>
              <button
                type="button"
                className="text-white bg-sky-950 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2"
              >
                Night
              </button>
              <button
                type="button"
                className="text-white bg-yellow-300 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2"
              >
                Wheat
              </button>
              <button
                type="button"
                className="text-white bg-green-800 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2"
              >
                Grove
              </button>
            </span>
          </div>

          <p className="mt-3">
            Qty:
            <button
              type="button"
              className="text-white bg-gray-400 ml-6 font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2"
            >
              {num}
              <img onClick={()=> setNum(num+1)} src={up} alt="" />
              <img onClick={()=> num===1 ? 1 :setNum(num-1)} src={down} alt="" />
            </button>
          </p>

          <button
            type="button"
            className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add to Cart * $499
          </button>
        </div>
        <div className=" w-[50%]">
          <img
            className=" bg-no-repeat rounded-xl bg-gray-700 bg-blend-multiply"
            src={image}
            alt=""
          />
        </div>
      </div>

      <section className="my-20 ">
        <ul className="flex flex-row font-medium justify-evenly space-x-8 rtl:space-x-reverse text-sm max-w-lg">
          <li>
            <a
              href="#"
              className="text-gray-900 hover:underline"
              aria-current="page"
            >
              Details
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:underline">
              Product Specs
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:underline">
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 hover:underline">
              Warranty Info
            </a>
          </li>
        </ul>
        <hr className="w-18 bg-black text-black my-4" />

        <div className="flex max-w-6xl">
          <p className="mx-6 max-w-sm">
            Bring the warmth and radiance of the summer solstice into your home
            with our stunning Summer Solstice Dining Stools. These exquisitely
            crafted stools feature a sun-inspired circular seat and gently
            curved backrest, evoking the sun's path across the summer sky.{" "}
          </p>
          <p className="mr-6 max-w-sm">
            Available in a range of warm, sunlit hues with a subtle shimmer
            effect, these 24-inch high stools are perfect for kitchen islands
            and bar-height tables. Crafted from sustainable hardwood, they offer
            both durability and eco-conscious appeal, while their ergonomic
            design ensures comfort during long, leisurely summer meals.
          </p>
          <div className="flex flex-col">
            <p>Over 10,000 five-star reviews </p>
            <p>Lifetime warranty included </p>
            <p>Sustainably sourced materials</p>
            <p>Award winning Design</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
      <h2 className="font-bold mx-8 mb-4">Other products you might like</h2>
        <div className="flex justify-center ">
          {productDetailImage.map((img, index) => {
            return (
              <div className="max-w-sm mx-4" key={index}>
                <img className="h-[80%] rounded-lg"  src={img} alt="product" />
                <p>Product</p>
                <p>Price</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
