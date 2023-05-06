import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, image, price, stock, name, singleproduct, amount) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, image, stock, singleproduct, amount },
    });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // // to clear the cart
  // const clearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        setIncrease,
        setDecrease,
        getLocalCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
