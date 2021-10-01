import { CartAction, CartActionTypes } from "../../types/cart.type";
import { IPizzasBlockNewObject } from "../../types/pizzas.type";


export const addPizzaToCart = (pizzaObj: IPizzasBlockNewObject): CartAction => ({
  type: CartActionTypes.ADD_PIZZA_CART,
  payload: pizzaObj,
});
