import { IPizzasState, PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";


const initialState: IPizzasState = {
	items: [],
	isLoaded: false,
	error: ""
};


const pizzasReducer = (state = initialState, action: PizzaAction): IPizzasState => {
	switch (action.type) {
		case PizzaActionTypes.SET_PIZZAS:
			return { ...state, items: action.payload, isLoaded: true, error: "" };

		case PizzaActionTypes.FAILURE_LOADED:
			return { ...state, error: action.payload, items: [], isLoaded: false };

		default:
			return state;
	}
};


export default pizzasReducer;
