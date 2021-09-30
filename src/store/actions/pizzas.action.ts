import { IPizzasJson } from "../../types/main.type";
import { PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";


export const setPizzas = (items: IPizzasJson[]): PizzaAction => ({
	type: PizzaActionTypes.SET_PIZZAS,
	payload: items,
});
