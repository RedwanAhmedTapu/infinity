import React from "react";

const Login = () => {
  return (
    <>
      <div className=" login flex flex-col space-y-4 w-screen h-screen bg-orange-600 justify-center items-center fixed">
        <label for="email" className="text-2xl sm:text-4xl font-serif">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="text-2xl sm:text-4xl font-serif"
        />
        <label for="password" className="text-2xl sm:text-4xl font-serif">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-2xl sm:text-4xl font-serif"
        />
        <input
          type="submit"
          value="Submit"
          className="w-40 h-16 bg-violet-500 flex justify-center items-center text-2xl sm:text-4xl"
        />
      </div>
    </>
  );
};

export default Login;
