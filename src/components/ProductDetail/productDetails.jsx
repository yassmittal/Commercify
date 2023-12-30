/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { StarIcon } from "../DynamicIcons";
import ProductDetailPlaceholder from "./productDetailPlaceholder";
import Similarproducts from "./similarproducts";

export default function ProductDetails({
  productImg,
  title,
  price,
  description,
  loading,
  addToCart,
}) {
  return (
    <>
      {loading ? (
        <ProductDetailPlaceholder />
      ) : (
        <>
          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-6 gap-4">
                <div className="border rounded-sm border-gray-400 shadow-md p-4 col-span-6 sm:col-span-2 h-[400px]">
                  <img
                    src={productImg}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="border rounded-sm border-gray-400 shadow-md p-4 col-span-6 sm:col-span-4 flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-base font-medium mt-2">${price}</p>
                  <p className="leading-tight text-sm max-w-md mt-3">
                    {description}
                  </p>
                  <div className="mt-4 flex items-center">
                    <p className="font-semibold flex items-center gap-2">
                      <span>4.7</span>

                      <StarIcon classIcon="w-3 h-3 text-[#712689]" />
                    </p>
                    <p className="text-xs ms-3">
                      total <span className="font-semibold">15209</span> reviews
                      posted
                    </p>
                  </div>

                  <div className="flex items-center gap-3 my-3">
                    <p>Size</p>
                    <button className="rounded-full w-6 h-6 bg-[#71268911] text-[#712689] text-xs hover:bg-[#71268922] selected">
                      XS
                    </button>
                    <button className="rounded-full w-6 h-6 bg-[#71268911] text-[#712689] text-xs hover:bg-[#71268922]">
                      S
                    </button>
                    <button className="rounded-full w-6 h-6 bg-[#71268911] text-[#712689] text-xs hover:bg-[#71268922]">
                      M
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-[#712689] hover:bg-[rgb(134,38,137)] rounded-md px-3 py-2 text-white font-semibold">
                      Buy Now
                    </button>
                    <button
                      className="bg-white border border-gray-400 hover:bg-gray-200 rounded-md px-3 py-2"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
