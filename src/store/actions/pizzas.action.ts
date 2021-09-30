import axios from "axios";
import { Dispatch } from "react";

import { IPizzasJson, PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";
import { IFiltersSortByState } from "../../types/filters.type";


export const setLoaded = (payload: boolean): PizzaAction => ({
	type: PizzaActionTypes.SET_LOADED,
	payload,
});

export const fetchPizzas = (sortBy: IFiltersSortByState, category: null | number) => (dispatch: Dispatch<PizzaAction>) => {
	dispatch({
		type: PizzaActionTypes.SET_LOADED,
		payload: false,
	});

	axios
		.get(
			`http://localhost:3001/pizzas?${
				(category !== null) 
					? `category=${ category }` 
					: '' 
			}&_sort=${ sortBy.type }&_order=${ sortBy.order }`,
		)
		.then(({ data }) => {
			dispatch(setPizzas(data));
		});
};

export const setPizzas = (items: IPizzasJson[]): PizzaAction => ({
	type: PizzaActionTypes.SET_PIZZAS,
	payload: items,
});
