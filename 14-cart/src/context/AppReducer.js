import { APP_ACTIONS } from "./AppContext";

function appReducer(state, { type, payload }) {
  switch (type) {
    case APP_ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: new Map(),
      };
    case APP_ACTIONS.REMOVE: {
      const newCart = new Map(state.cart);
      newCart.delete(payload);
      return {
        ...state,
        cart: newCart,
      };
    }
    case APP_ACTIONS.DECREASE: {
      const id = payload;
      if (state.cart.has(id)) {
        const newCart = new Map(state.cart);
        const newItem = { ...newCart.get(id) };
        newItem.amount = newItem.amount - 1;
        if (newItem.amount < 1) newCart.delete(id);
        else newCart.set(id, newItem);
        return {
          ...state,
          cart: newCart,
        };
      }
      return state;
    }
    case APP_ACTIONS.INCREASE: {
      const id = payload;
      if (state.cart.has(id)) {
        const newCart = new Map(state.cart);
        const newItem = { ...newCart.get(id) };
        newItem.amount = newItem.amount + 1;
        newCart.set(id, newItem);
        return {
          ...state,
          cart: newCart,
        };
      }
      return state;
    }
    case APP_ACTIONS.DISPLAY_ITEMS: {
      const items = payload;
      const newCart = new Map(items.map((item) => [item.id, item]));
      return {
        ...state,
        loading: false,
        cart: newCart,
      };
    }
    case APP_ACTIONS.LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
}

export default appReducer;
