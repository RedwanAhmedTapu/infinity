const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { singleproduct, amount } = action.payload;

    // let cartProduct = {
    //   id: singleproduct.id,
    //   name: singleproduct.title,
    //   price: singleproduct.price,

    //   image: singleproduct.images[0],

    //   stock: singleproduct.stock,
    //   amount: amount,
    // };
    // console.log(cartProduct);

    return {
      ...state,
      cart: [...state.cart, { ...action.payload, amount }],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let total_item =
      state.cart &&
      state.cart.reduce((initialVal, curElem) => {
        let { amount } = curElem;

        initialVal = initialVal + amount;

        console.log(initialVal);

        return initialVal;
      }, 0);

    return {
      ...state,
      // total_item:,
      total_item: total_item,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price =
      state.cart &&
      state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        console.log(amount);

        initialVal = initialVal + price * amount;

        console.log(initialVal);

        return initialVal;
      }, 0);
    return {
      ...state,
      // total_item:,
      total_price: total_price,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.stock) {
          incAmount = curElem.stock;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;

  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  return state;
};

export default cartReducer;

// https://stackoverflow.com/questions/63117470/how-to-return-two-values-in-reduce#:~:text=You%20cannot%20return%20two%20values%20in%20reduce%20.
