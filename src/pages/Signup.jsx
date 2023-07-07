// import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    image: "",
    username: " ",
    phone: " ",
    email: " ",
    password: " ",
    confirmpassword: " ",
    description: " ",
  });
  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { confirmpassword, description, email, password, phone, username } =
      user;
    console.log(confirmpassword);
    try {
      if (
        confirmpassword.trim() === "" ||
        description.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        phone.trim() === "" ||
        username.trim() === "" ||
        user.image.trim() === ""
      ) {
        alert("please fill all the data");
      } else {
        await fetch("https://backendserver-flsp.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => {
          window.location.href = "/login";
          alert("registration completed");
        });
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };
  // handleSubmit();

  return (
    <>
      <div className="w-screen h-screen bg-violet-900 flex justify-center items-center ">
        <form
          className=" flex flex-col justify-center items-center space-y-2 sm:space-y-6"
          style={{ width: "155rem", height: "55rem" }}
        >
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              id="image"
              name="image"
              placeholder="profile Image"
              className="text-xl font-serif w-34 h-34 "
              value={user.image}
              onChange={handleChange}
              required
            />
            <label for="username" className="text-xl text-white font-semibold">
              Name :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-xl font-serif "
              value={user.name}
              onChange={handleChange}
              required
            />
            <label for="email" className="text-xl text-white font-semibold">
              email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-xl font-serif"
              value={user.name}
              onChange={handleChange}
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
              value={user.name}
              onChange={handleChange}
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
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <label
            for="confirmpassword"
            className="text-xl text-white font-semibold"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className=" text-xl font-serif"
            value={user.name}
            onChange={handleChange}
            required
          />

          <div className="flex flex-row space-x-2 justify-center items-center">
            <label
              for="description"
              className="text-xl text-white font-semibold"
            >
              Description:
            </label>
            <textarea
              className="w-28 sm:w-64 h-28"
              name="description"
              id="description"
              cols="30"
              rows="5"
              value={user.name}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="bg-orange-400 w-44 h-16 flex justify-center items-center text-xl text-white font-semibold">
            <input type="submit" value="Register" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
