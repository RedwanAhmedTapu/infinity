import React from "react";

const Signup = () => {
  return (
    <>
      <div className="w-screen h-screen bg-violet-900 flex justify-center items-center fixed">
        <form
          className=" flex flex-col justify-center items-center space-y-2 sm:space-y-6"
          style={{ width: "155rem", height: "55rem" }}
        >
          <div className="flex flex-col space-y-2">
            <label for="fname" className="text-xl text-white font-semibold">
              First Name :
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="text-xl font-serif "
              required
            />
            <label for="lname" className="text-xl text-white font-semibold">
              Last Name :
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="text-xl font-serif"
              required
            />
          </div>
          <div className=" flex flex-col sm:flex-row space-x-2">
            <label for="phone" className="text-xl text-white font-semibold">
              Phone No:
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className=" text-xl font-serif"
              required
            />
            <label for="password" className="text-xl text-white font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=" text-xl font-serif"
              required
            />
          </div>
          <div className="flex flex-row space-x-2 justify-center items-center">
            <label for="textarea" className="text-xl text-white font-semibold">
              Description:
            </label>
            <textarea
              className="w-28 sm:w-64 h-28"
              name="textarea"
              id="textarea"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="bg-orange-400 w-44 h-16 flex justify-center items-center text-xl text-white font-semibold">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
