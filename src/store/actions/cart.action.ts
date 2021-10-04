import { CartAction, CartActionTypes, ICartItem } from "../../types/cart.type";
import { IPizzasBlockNewObject } from "../../types/pizzas.type";


export const addPizzaToCart = (pizzaObj: IPizzasBlockNewObject): CartAction => ({
  type: CartActionTypes.ADD_PIZZA_CART,
  payload: { ...pizzaObj, countItem: 1 },
});

export const clearCart = (): CartAction => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeCartItem = (id: number): CartAction => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id: number): CartAction => ({
  type: CartActionTypes.PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id: number): CartAction => ({
  type: CartActionTypes.MINUS_CART_ITEM,
  payload: id,
});
