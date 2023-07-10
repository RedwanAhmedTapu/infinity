import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import EmptyCartComponent from "../Components/EmptyCartComponent";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart, total_price, total_item } = useCartContext();
  console.log(cart.data);

  return (
    <>
      {cart.data ? (
        <div class="h-screen w-screen bg-gray-100 pt-20">
          <h1 class="cartText mb-10 text-center text-3xl font-bold">
            Cart Items
          </h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3 ">
              {cart &&
                cart.map((curElem, index) => {
                  return <CartItem key={index} {...curElem} />;
                })}
            </div>

            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">${total_price}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping Cost</p>
                <p class="text-gray-700">$2.99</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">
                    ${total_price + 2.99} USD
                  </p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>

              <Link to={`/orderPage`}>
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCartComponent />
      )}
    </>
  );
};

export default Cart;
