const INITIAL_STATE = {
  cart: [],
  isRefresh: false,
};

export default function cartReducer(state = INITIAL_STATE, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };
        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQuantity);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(newArr));
        return {
          ...state,
          cart: newArr,
        };
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        console.log(newArr);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(newArr));
        return {
          ...state,
          cart: newArr,
        };
      }

    case "UPDATEITEM":
      const indexItemUpdate = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      const newArr = [...state.cart];
      newArr.splice(indexItemUpdate, 1, action.payload);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(newArr));
      return {
        ...state,
        cart: newArr,
      };
    case "setIsRefresh":
      return {
        ...state,
        isRefresh: !state.isRefresh,
      };
    case "actualiserCart":
      return {
        ...state,
        cart: action.payload,
      };
  }

  return state;
}
