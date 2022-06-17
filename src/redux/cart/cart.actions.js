import { cartActionsTypes } from "./cart.types";

export const toggleCartHidden = () => {
  return { type: cartActionsTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = item => {
  return { type: cartActionsTypes.ADD_ITEM, payload: item };
};

export const clearItemFromCart = item => {
  return { type: cartActionsTypes.CLEAR_ITEM, payload: item };
};

export const removeItemFromCart = item => {
  return { type: cartActionsTypes.REMOVE_ITEM, payload: item };
};

export const clearCart = () => ({ type: cartActionsTypes.CLEAR_CART });
