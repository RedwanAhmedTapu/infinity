import React from "react";
import { NavLink } from "react-router-dom";
// import { useProductContext } from "../context/ProductContext";

const ProductSelection = () => {
  // const { getProducts } = useProductContext();

  return (
    <>
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-0 md:grid-rows-2 h-60  md:h-24 lg:h-28 justify-evenly   place-items-center bg-violet-50 sticky top-24 z-10 p-2 sm:p-10 md:8 ">
        <NavLink to="/" state={{ category: "all" }}>
          <div className=" productselection text-violet-50 contrast-125 w-24 sm:w-34 xl:w-40  font-bold  h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-8 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            All
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "smartphones" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-32 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            Smartphone
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "laptops" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-32 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            Laptop
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "fragrances" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-32 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            Perfume
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "skincare" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-32 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            Skincare
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "groceries" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center space-x-32 shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110">
            Groceries
          </div>
        </NavLink>
        <NavLink to="/" state={{ category: "homeDecoration" }}>
          <div className="productselection text-violet-50 contrast-125 sm:w-34 xl:w-40 font-bold  w-24 h-12 sm:h-16 bg-orange-300  rounded-lg -inset-1 shadow-teal-200 flex justify-center items-center  shadow-2xl hover:transition ease-in-out duration-200 hover:scale-110 ">
            Home Decoration
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProductSelection;
