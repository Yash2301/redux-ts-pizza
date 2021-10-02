import { IPizzasBlockNewObject } from "./pizzas.type";

export interface ICartItemInner {
  items: IPizzasBlockNewObject[],
  totalPrice: number
}

export interface ICartItem {
  [ key: number ] : ICartItemInner
}

export interface ICartState {
  items: ICartItem,
  totalPrice: number,
  totalCount: number,
}

export enum CartActionTypes {
  ADD_PIZZA_CART = 'ADD_PIZZA_CART',
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  PLUS_CART_ITEM = 'PLUS_CART_ITEM',
  MINUS_CART_ITEM = 'MINUS_CART_ITEM',
}

interface ICartSetAction {
  type: CartActionTypes.ADD_PIZZA_CART;
  payload: IPizzasBlockNewObject
}

interface ICartClearAction {
  type: CartActionTypes.CLEAR_CART;
}

interface ICartGetIDAction {
  type: CartActionTypes.REMOVE_CART_ITEM
    | CartActionTypes.PLUS_CART_ITEM
    | CartActionTypes.MINUS_CART_ITEM;
  payload: number
}


export type CartAction = ICartSetAction
  | ICartClearAction
  | ICartGetIDAction
