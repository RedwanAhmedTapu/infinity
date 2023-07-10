import AddIcon from "@mui/icons-material/Add";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CategoryIcon from "@mui/icons-material/Category";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Star from "../Components/Star";
import { useCartContext } from "../context/CartContext";
const SingleProduct = () => {
  const [singleproduct, setSingleproduct] = useState("");
  const [image, setImage] = useState();
  const [amount, setAmount] = useState(1);

  const [user, setUser] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCartContext();
  console.log(id);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < singleproduct.stock
      ? setAmount(amount + 1)
      : setAmount(singleproduct.stock);
  };

  useEffect(() => {
    const singleprdct = async () => {
      const res = await axios.get(
        `https://backendserver-flsp.onrender.com/${id}`
      );
      console.log(res);
      const products = await res.data;
      setSingleproduct(products);
      console.log(products);
    };
    const reviewData = async () => {
      const res = await axios.get(
        `https://backendserver-flsp.onrender.com/messages`
      );
      const data = await res.data;
      console.log(res.data);
      setUser([...user, data]);
    };

    singleprdct();
    reviewData();
  }, [id]);
  // console.log(singleproduct.image[3]);
  // console.log(user);
  return (
    <>
      <div className=" flex justify-center items-center  mt-8">
        {singleproduct && (
          <div
            className="singleproduct  flex flex-col gap-y-6 justify-center items-center  pl-4 pr-4 w-96 h-96"
            style={{
              width: "45rem",
              height: "40rem",
              // position: "absolute",
              // top: "30%",
              // left: "20%",
            }}
          >
            <div className="w-16 h-16 sm:w-28 sm:h-28 rounded shadow-md shadow-fuchsia-400 -inset-2">
              {image ? (
                <img
                  src={image}
                  className="w-16 h-16 sm:w-28 sm:h-28 rounded-lg"
                />
              ) : (
                <img
                  src={singleproduct.thumbnail}
                  className="w-16 h-16 sm:w-28 sm:h-28 "
                  onClick={() => {
                    setImage(singleproduct.thumbnail);
                  }}
                />
              )}
            </div>
            <div className="flex gap-1 sm:gap-3 justify-center items-center w-24 h-24 box-border">
              <img
                src={singleproduct.image1}
                key={id}
                className="w-16 h-16sm:w-24 sm:h-24 rounded shadow-md shadow-sky-50 hover:scale-110"
                onClick={() => {
                  setImage(singleproduct.image1);
                }}
              />

              <img
                src={singleproduct.image2}
                key={id}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded shadow-md shadow-sky-50 hover:scale-110"
                onClick={() => {
                  setImage(singleproduct.image2);
                }}
              />

              <img
                src={singleproduct.image3}
                key={id}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded shadow-md shadow-sky-50 hover:scale-110"
                onClick={() => {
                  setImage(singleproduct.image3);
                }}
              />

              <img
                src={singleproduct.image4}
                key={id}
                className="w-16 h-16 sm:w-24 sm:h-24  rounded shadow-md shadow-sky-50 hover:scale-110"
                onClick={() => {
                  setImage(singleproduct.image4);
                }}
              />
            </div>
            <div className="flex justify-center items-center sm:space-x-80 mt-4">
              <Star rating={singleproduct.rating} />
              <div className="flex text-white text-1xl font-bold from-stone-700 hover:text-white">
                <p className="text-xl sm:text-2xl text-white text-bold">
                  Discount:
                </p>
                <p className="text-xl sm:text-2xl">
                  {singleproduct.discountPercentage}%
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center flex-wrap  tracking-tight line-clamp-2 text-white font-semibold text-xl sm:text-2xl w-full h-18 pr-4 pl-4 text-center">
              {singleproduct.description}
            </div>
            <div className="flex flex-row gap-x-2 sm:gap-x-8  justify-evenly items-center w-full h-24">
              <div className="text-white ">
                <p className="text-zinc-200 text-xl sm:text-2xl">Delivery</p>
                <DeliveryDiningIcon
                  className="icon"
                  style={{ fontSize: "3.8rem" }}
                />
              </div>
              <div className="text-white">
                <p className="text-zinc-200 text-xl sm:text-2xl">Shipping</p>
                <LocalShippingIcon
                  className="icon"
                  style={{ fontSize: "3.8rem" }}
                />
              </div>
              <div className="text-white">
                <p className="text-zinc-200 text-xl sm:text-2xl">Airport</p>
                <AirportShuttleIcon
                  className="icon"
                  style={{ fontSize: "3.8rem" }}
                />
              </div>
              <div className="text-white">
                <p className="text-zinc-200 text-xl sm:text-2xl">Category</p>
                <CategoryIcon className="icon" style={{ fontSize: "3.8rem" }} />
              </div>
            </div>
            <div className="flex flex-row w-full h-24 justify-evenly items-center gap-x-34 sm:gap-x-48 z-10">
              <div className="flex gap-x-1 sm:gap-x-6 justify-center items-center ">
                <button className="flex self-center items-center justify-center text-1xl text-violet-50 hover:scale-110 w-16 h-16 bg-red-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2">
                  <AddIcon
                    style={{ fontSize: "2.8rem" }}
                    onClick={() => {
                      setIncrease();
                    }}
                  />
                </button>
                <div className="text-xl sm:text-2xl text-cyan-100">
                  {amount}
                </div>
                <button className="flex self-center items-center justify-center text-1xl text-violet-50 hover:scale-110 w-16 h-16 bg-red-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2">
                  <RemoveIcon
                    style={{ fontSize: "2.8rem" }}
                    onClick={() => {
                      setDecrease();
                    }}
                  />
                </button>
              </div>
              <NavLink to="/cart">
                <button
                  className="flex self-center items-center justify-center text-1xl text-violet-50 hover:scale-110 w-24 h-16 bg-red-400   rounded shadow-xl hover:transition ease-in-out duration-300 uppercase p-2"
                  onClick={() => {
                    addToCart(
                      id,
                      singleproduct.thumbnail,

                      singleproduct.price,

                      singleproduct.stock,
                      singleproduct.title,

                      singleproduct,
                      amount
                    );
                  }}
                >
                  AddToCart
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <ul className="divide-y divide-gray-300">
        {user &&
          user.map((msg, index) => {
            return (
              <li key={index} className="py-2">
                <strong>{user && user.user}</strong>: {user && user.message}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SingleProduct;
