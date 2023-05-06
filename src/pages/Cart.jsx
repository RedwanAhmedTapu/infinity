import React from "react";
import "react-multi-carousel/lib/styles.css";
import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart, total_price, total_item } = useCartContext();
  console.log(cart);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center self-center  gap-y-4  bg-slate-500 p-8 ">
        {cart.map((curElem, index) => {
          return <CartItem key={index} {...curElem} />;
        })}
        <div className=" totalcart flex justify-center items-center space-x-2">
          <div
            className="  sm:text-4xl text-zinc-400 w-34 sm:w-64 h-16 bg-pink-900   rounded shadow-xl  uppercase p-2 flex justify-center items-center"
            style={{ fontSize: "1.5rem" }}
          >
            total item : {total_item}$
          </div>
          <div
            className="  sm:text-4xl text-zinc-400 w-34 sm:w-64 h-16 bg-pink-900 rounded shadow-xl uppercase p-2 flex justify-center items-center"
            style={{ fontSize: "1.5rem" }}
          >
            total price : {total_price}$
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
