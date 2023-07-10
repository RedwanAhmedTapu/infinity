import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import React from "react";
import { useCartContext } from "../context/CartContext";

const CartItem = (curElem) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();
  const { id, amount } = curElem;
  console.log(curElem);
  return (
    <>
      <div className="cartbox w-64  md:max-w-xl  h-34 md:h-34  flex flex-col md:flex-row justify-between items-center gap-x-8 p-6 m-3 rounded">
        <div className="w-44 h-34 ">
          <img src={curElem.image} className="lg:w-24 w-16 h-16 lg:h-24" />
        </div>

        <div className=" text-2xl text-cyan-100">{curElem.name}</div>
        <div className="w-24 h-24 flex flex-row md:flex-col justify-between items-center">
          <div>
            <AddBoxIcon
              className=" text-cyan-100"
              onClick={() => {
                setIncrease(id);
              }}
            />
          </div>
          <div className=" text-cyan-100">{amount}</div>
          <div>
            <IndeterminateCheckBoxIcon
              className=" text-cyan-100"
              onClick={() => {
                setDecrease(id);
              }}
            />
          </div>
        </div>
        <div className=" text-cyan-100 text-2xl">{curElem.price * amount}$</div>
        <div className="">
          <DeleteIcon
            className=" text-cyan-100"
            style={{ width: "3rem", height: "3rem" }}
            onClick={() => {
              removeItem(id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
