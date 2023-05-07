import React from "react";
import CartItem from "../Components/CartItem";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart, total_price, total_item } = useCartContext();
  console.log(cart);

  return (
    <>
      {cart ? (
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
      ) : (
        <div className="flex w-96 h-48 bg-slate-700 text-3xl text-white flex justify-center items-center ">
          Your Cart is empty
        </div>
      )}
    </>
  );
};

export default Cart;
