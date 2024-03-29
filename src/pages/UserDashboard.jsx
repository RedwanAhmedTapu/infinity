import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatMessages from "../Components/ChatMessages";
import ProductCard from "../Components/ProductCard";

const UserDashboard = () => {
  const [userData, setUserData] = useState("");
  const [orderdata, setOrderData] = useState("");
  const [show, setShow] = useState();
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("userMail");

  useEffect(() => {
    const user = async () => {
      // console.log(email);
      const res = await axios.get(
        `https://backendserver-flsp.onrender.com/user/${email}`
      );

      const data = await res.data;
      setUserData(data);
      console.log(data);
    };
    const order = async () => {
      // console.log(email);
      const res = await axios.get(
        `https://backendserver-flsp.onrender.com/ordered/${email}`
      );

      const data = await res.data;
      setOrderData(data);
      console.log(data);
    };
    user();
    order();
    console.log(userData);
  }, [email]);
  console.log(show);
  const handleClick = () => {
    setShow(false);
  };
  return (
    <>
      {userData && (
        <div className="flex justify-center items-center h-screen">
          <div class="relative flex justify-center items-center  w-96 flex-col  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <div class="relative mx-4 mt-4 h-44 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img src={userData.image} alt="profile-picture" />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {userData.username}
              </h4>
              <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                {userData.email}
              </p>
            </div>
            <div class="flex justify-center gap-7 p-6 pt-2">
              <a class="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased">
                <FacebookIcon />
              </a>
              <a className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a class="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {userData && show ? (
        <ChatMessages onClick={handleClick} />
      ) : (
        <div
          className="flex self-center items-center justify-center lg:text-2xl   text-zinc-500 hover:scale-110 w-20 h-20 bg-cyan-400   rounded-full shadow-xl hover:transition ease-in-out duration-300 uppercase p-2 font-semibold "
          onClick={() => {
            setShow(true);
          }}
        >
          <p className=" text-xl text-cyan-50 ">review</p>
        </div>
      )}

      {userData && orderdata.length !== "" ? (
        <>
          <p className="userDashText text-2xl text-center">
            Product You Selected to Buy
          </p>
          <div className="productCardDiv flex flex-wrap items-center justify-center w-screen p-10">
            {orderdata.cart &&
              orderdata.cart.map((curElem, index) => {
                return <ProductCard key={index} {...curElem} />;
              })}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UserDashboard;
