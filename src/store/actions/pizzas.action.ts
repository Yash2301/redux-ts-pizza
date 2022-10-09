import { IPizzasJson, PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";

export const setPizzas = (items: IPizzasJson[]): PizzaAction => ({
	type: PizzaActionTypes.SET_PIZZAS,
	payload: items,
});

export const failLoaded = (error: string): PizzaAction => {
	return {
		type: PizzaActionTypes.FAILURE_LOADED,
		payload: error
	};
};

export const setLocale = (lang: string): PizzaAction => {
	return {
		type: PizzaActionTypes.SET_LOCALE,
		payload: lang
	};
};

