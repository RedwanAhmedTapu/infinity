import React from "react";
// import InfinityShop from "../imgs/infinityShop (1).png";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <>
      <div
        className="sectionColor w-screen bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 flex flex-col justify-center items-center  space-y-8 shadow-2xl shadow-blue-500 -inset-2 "
        style={{ height: "40rem" }}
      >
        <div className="sectionInfinityText text-white text-2xl sm:text-5xl uppercase">
          Welcome to Infinity Shop
        </div>

        <input
          type="serch"
          placeholder="search products....."
          className="w-64 sm:w-96 h-12 shadow-inner shadow-sky-400   border-4 border-r-4 rounded-lg p-6 placeholder:text-xl sm:placeholder:text-2xl placeholder:text-slate-600 "
        />
        <NavLink to="/signup">
          <button className="text-2xl  sm:text-4xl text-zinc-400 hover:scale-110 w-34 sm:w-48 h-16 bg-pink-900   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2">
            Signup
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Section;
