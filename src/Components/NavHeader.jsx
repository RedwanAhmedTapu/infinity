import React from "react";

const NavHeader = () => {
  return (
    <>
      <div className="flex flex-row  place-content-center w-screen h-11  space-x-9 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 font-['sans-serif']">
        <div className="text-2xl text-white">Signup</div>
        <div className="text-2xl text-white">Login</div>
      </div>
    </>
  );
};

export default NavHeader;
