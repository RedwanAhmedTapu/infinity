import React from "react";
import infinity from "../imgs/infinty.png";

const Footer = () => {
  return (
    <>
      <div className="footer w-screen h-96 flex flex-row justify-start items-center bg-indigo-700  ">
        <div className="flex flex-col max-w-full">
          <div className="h-auto max-w-full flex self-center space-x-3">
            <img src={infinity} alt="logo-img" className="  h-14 w-14 " />
            <div className="  text-white lg:text-5xl text-3xl text-bold place-items-center self-center ">
              infinity
            </div>
            <div className="  text-white lg:text-5xl text-3xl place-items-center self-center ">
              shop
            </div>
            <div className="bg-orange-900 w-64 sm:w-96 h-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
