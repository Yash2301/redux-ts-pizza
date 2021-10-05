import { IPizzasJson, PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";


export const setLoaded = (payload: boolean): PizzaAction => ({
	type: PizzaActionTypes.SET_LOADED,
	payload,
});

export const setPizzas = (items: IPizzasJson[]): PizzaAction => ({
	type: PizzaActionTypes.SET_PIZZAS,
	payload: items,
});
