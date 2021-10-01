import { IPizzasBlockNewObject } from "./pizzas.type";


export interface ICartItem {
  [ key: number ] : IPizzasBlockNewObject[]
}

export interface ICartState {
  items: ICartItem,
  totalPrice: number,
  totalCount: number,
}

export enum CartActionTypes {
  ADD_PIZZA_CART = 'ADD_PIZZA_CART',
}

interface ICartSetAction {
  type: CartActionTypes.ADD_PIZZA_CART;
  payload: IPizzasBlockNewObject
}


export type CartAction = ICartSetAction
