import { IPizzasState, PizzaAction, PizzaActionTypes } from "../../types/pizzas.type";


const initialState: IPizzasState = {
	items: [],
	isLoaded: false,
};


const pizzasReducer = (state = initialState, action: PizzaAction): IPizzasState => {
	switch (action.type) {
		case PizzaActionTypes.SET_PIZZAS:
			return { ...state, items: action.payload };

		default:
			return state;
	}
};


export default pizzasReducer;
