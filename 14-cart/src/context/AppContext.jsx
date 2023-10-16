import { createContext, useContext, useReducer, useEffect } from "react";

import appReducer from "./AppReducer";
import cartItems from "../data";
import { getCartTotals } from "./util";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const APP_INIT_STATE = {
  loading: true,
  //cart: new Map(cartItems.map((item) => [item.id, item])),
  cart: new Map(),
};

export const APP_ACTIONS = {
  CLEAR_CART: "CLEAR_CART",
  REMOVE: "REMOVE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  LOADING: "LOADING",
  DISPLAY_ITEMS: "DISPLAY_ITEMS",
};

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, APP_INIT_STATE);
  const totals = getCartTotals(state.cart);

  const contextValue = {
    ...state,
    ...totals,
    clearCart() {
      dispatch({ type: APP_ACTIONS.CLEAR_CART });
    },
    removeCartItem(id) {
      dispatch({ type: APP_ACTIONS.REMOVE, payload: id });
    },
    decreaseCartItemAmount(id) {
      dispatch({ type: APP_ACTIONS.DECREASE, payload: id });
    },
    increaseCartItemAmount(id) {
      dispatch({ type: APP_ACTIONS.INCREASE, payload: id });
    },
    displayCartItems(items) {
      dispatch({ type: APP_ACTIONS.DISPLAY_ITEMS, payload: items });
    },
    setLoadingState(isLoading) {
      dispatch({ type: APP_ACTIONS.LOADING, payload: isLoading });
    },
  };

  const fetchData = async (url) => {
    contextValue.setLoadingState(true);
    const response = await fetch(url);
    if (response.ok) {
      const cart = await response.json();
      console.log(cart);
      contextValue.displayCartItems(cart);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export default AppProvider;
