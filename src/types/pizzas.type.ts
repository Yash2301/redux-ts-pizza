export interface IPizzasJson {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export interface IPizzasBlockNewObject {
    id : number,
    name : string,
    imageUrl : string,
    price : number,
    size : number,
    type : string
}


export interface IPizzasState {
    items: IPizzasJson[],
    isLoaded: boolean,
}

export enum PizzaActionTypes {
    SET_PIZZAS = 'SET_PIZZAS',
    SET_LOADED = 'SET_LOADED',
}

interface IPizzaSetAction {
    type: PizzaActionTypes.SET_PIZZAS;
    payload: IPizzasJson[]
}

interface IPizzaLoadedAction {
    type: PizzaActionTypes.SET_LOADED;
    payload: boolean
}


export type PizzaAction = IPizzaSetAction
  | IPizzaLoadedAction
