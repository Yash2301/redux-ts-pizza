import { IPizzasJson } from "./main.type";


export interface IPizzasState {
    items: IPizzasJson[],
    isLoaded: boolean,
}

export enum PizzaActionTypes {
    SET_PIZZAS = 'SET_PIZZAS',
}

interface IPizzaSetAction {
    type: PizzaActionTypes.SET_PIZZAS;
    payload: IPizzasJson[]
}


export type PizzaAction = IPizzaSetAction
