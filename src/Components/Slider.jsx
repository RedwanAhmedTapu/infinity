import React from "react";
import { Link } from "react-router-dom";

const Slider = (curElem) => {
  return (
    <>
      <div className="card flex flex-col justify-center items-center bg-violet-800 hover:bg-red-900 hover:font-light  hover:opacity-80  rounded w-68 sm:w-64  lg:w-80 h-76  sm:h-94 p-6 space-y-4  transition duration-200 delay-150 hover:delay-100 drop-shadow-lg object-cover box-border">
        <img
          src={curElem.thumbnail}
          className="w-40 h-40 rounded shadow-2xl  shadow-red-400 hover:shadow-red-900  -inset-2 "
        />

        <p className="  text-white decoration-4 font-bold hover:text-white">
          {curElem.title}
        </p>
        <div className="flex justify-center items-center gap-x-20">
          <div className="text-white font-bold from-stone-700 hover:text-white flex flex-wrap sm:flex-nowrap">
            ${curElem.price}
          </div>
          <Link to={`/singleproduct/${curElem.Id}`}>
            <button className="flex self-center items-center justify-center text-1xl text-violet-50 hover:scale-110 w-24 h-8 bg-red-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slider;
