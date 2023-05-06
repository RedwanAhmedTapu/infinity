import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import infinity from "../imgs/infinty.png";

const Nav = () => {
  const [menu, setMenu] = useState();
  const { total_item } = useCartContext();
  const Navigate = useNavigate();
  const home = () => {
    Navigate("/");
    setMenu(true);
  };
  const about = () => {
    Navigate("/about");
    setMenu(true);
  };
  const contact = () => {
    Navigate("/contact");
    setMenu(true);
  };
  const cart = () => {
    Navigate("/cart");
    setMenu(true);
  };
  console.log(menu);
  return (
    <>
      <div className=" sticky top-0 left-0 right-0 visible  z-30 bg-white  w-screen h-24 hidden sm:flex flex-row justify-evenly font-['sans-serif']   shadow-md ">
        <div
          className="h-auto max-w-full flex self-center space-x-3"
          onClick={home}
        >
          <img src={infinity} alt="logo-img" className="  h-14 w-14 " />
          <div className="infinity  text-purple-600 lg:text-5xl text-3xl text-bold place-items-center self-center ">
            infinity
          </div>
          <div className=" infinity text-purple-600 lg:text-5xl text-3xl place-items-center self-center ">
            shop
          </div>
        </div>
        <div className="menubar  text-slate-900 flex justify-center items-center sm:hidden ">
          <MenuIcon
            className="menubar"
            style={{ fontSize: "3rem" }}
            onClick={() => {
              setMenu(true);
            }}
          />
        </div>

        <div className="flex flex-row  justify-evenly self-center max-w-full h-8 lg:space-x-20  space-x-8 hidden sm:flex">
          <div
            className="lg:text-2xl  flex place-items-center w-5 h-5 text-slate-600 hover:text-blue-900 transition font-semibold  "
            onClick={home}
          >
            Home
          </div>
          <div
            className="lg:text-2xl flex place-items-center w-5 h-5 text-slate-600 hover:text-blue-900 transition font-semibold  "
            onClick={about}
          >
            About
          </div>
          <div
            className="lg:text-2xl flex place-items-center w-5 h-5  text-slate-600 hover:text-blue-900 transition font-semibold  "
            onClick={contact}
          >
            Contact
          </div>
          <div
            className="lg:text-2xl text-cyan-100 flex place-items-center w-5 h-5  text-slate-600 hover:text-green-600 transition"
            onClick={cart}
          >
            <ShoppingCartIcon
              className=" text-cyan-400 "
              style={{ width: "2.7rem", height: "2.7rem" }}
            />
          </div>
          <div
            className="shopcartCircle w-10 h-10 bg-green-300 rounded-full relative bottom-8  lg:right-20 right-10 flex justify-center items-center text-2xl font-semibold text-cyan-100 font-semibold  "
            onClick={cart}
          >
            {total_item}
          </div>
          <button className="flex self-center items-center justify-center lg:text-2xl   text-zinc-500 hover:scale-110 lg:w-32  w-24  sm:h-16 h-12 bg-cyan-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2 font-semibold  ">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
      </div>
      {menu ? (
        <div className=" sticky top-0 left-0 right-0 z-30 bg-white  w-screen h-24 sm:hidden flex flex-row justify-evenly font-['sans-serif']   shadow-md ">
          <div className="h-auto max-w-full flex self-center space-x-3">
            <img src={infinity} alt="logo-img" className="  h-14 w-14 " />
            <div className="infinity  text-purple-600 lg:text-5xl text-3xl text-bold place-items-center self-center ">
              infinity
            </div>
            <div className=" infinity text-purple-600 lg:text-5xl text-3xl place-items-center self-center ">
              shop
            </div>
          </div>
          <div className="  text-slate-900 flex justify-center items-center sm:hidden ">
            <MenuIcon
              className="menubar rounded"
              style={{ fontSize: "3rem" }}
              onClick={() => {
                setMenu(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="navbar sticky top-0 left-0 right-0  z-30 bg-white  w-screen h-screen space-y-20 flex sm:hidden flex-col justify-evenly font-['sans-serif'] shadow-md ">
          <div
            className="h-auto max-w-full flex self-center space-x-3 "
            onClick={home}
          >
            <img src={infinity} alt="logo-img" className="  h-14 w-14 " />
            <div className="infinity  text-purple-600 lg:text-5xl text-3xl text-bold place-items-center self-center ">
              infinity
            </div>
            <div className=" infinity text-purple-600 lg:text-5xl text-3xl place-items-center self-center ">
              shop
            </div>
            <CloseIcon
              className="relative top-1"
              style={{ fontSize: "3rem" }}
              onClick={() => {
                setMenu(true);
              }}
            />
          </div>
          <div className="flex flex-col  justify-evenly self-center max-w-full h-8   space-y-10  sm:hidden relative bottom-10">
            <div
              className="text-4xl  flex place-items-center w-5 h-5 text-slate-600 hover:text-blue-900 transition font-semibold  "
              onClick={home}
            >
              Home
            </div>
            <div
              className="text-4xl flex place-items-center w-5 h-5 text-slate-600 hover:text-blue-900 transition font-semibold  "
              onClick={about}
            >
              About
            </div>
            <div
              className="text-4xl flex place-items-center w-5 h-5  text-slate-600 hover:text-blue-900 transition font-semibold  "
              onClick={contact}
            >
              Contact
            </div>
            <div
              className="text-4xl text-cyan-100 flex place-items-center w-5 h-5  text-slate-600 hover:text-green-600 transition"
              onClick={cart}
            >
              <ShoppingCartIcon
                className=" text-cyan-400 "
                style={{ width: "3.7rem", height: "3.7rem" }}
              />
            </div>
            <div
              className="shopcartCircle w-8 h-8  rounded-full absolute top-0 left-8  lg:right-20 flex justify-center items-center text-2xl font-semibold text-cyan-100 font-semibold  "
              onClick={cart}
            >
              {total_item}
            </div>

            <button
              className="flex self-center items-center justify-center  lg:text-2xl   text-zinc-500 hover:scale-110 lg:w-32  w-24  sm:h-16 h-12 bg-cyan-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2 font-semibold  relative bottom-4"
              onClick={() => {
                setMenu(true);
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
