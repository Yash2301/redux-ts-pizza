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
    locale : string,
    error: string
}

export enum PizzaActionTypes {
    SET_PIZZAS = 'SET_PIZZAS',
    SET_LOADED = 'SET_LOADED',
    FAILURE_LOADED = 'FAILURE_LOADED',
    SET_LOCALE = 'SET_LOCALE',
}

interface IPizzaSetAction {
    type: PizzaActionTypes.SET_PIZZAS;
    payload: IPizzasJson[]
}

interface IPizzaLoadedAction {
    type: PizzaActionTypes.SET_LOADED;
    payload: boolean
}

interface IPizzaFailureLoadedAction {
    type: PizzaActionTypes.FAILURE_LOADED;
    payload: string
}


interface SetLocale {
    type: PizzaActionTypes.SET_LOCALE;
    payload: string
}


export type PizzaAction = IPizzaSetAction
  | IPizzaLoadedAction
  | IPizzaFailureLoadedAction | SetLocale
