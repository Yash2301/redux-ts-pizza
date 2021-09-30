import { combineReducers } from 'redux';
import filtersReducer from './filters.reducer';
import pizzasReducer from './pizzas.reducer';


export const rootReducer = combineReducers({
	filters: filtersReducer,
	pizzas: pizzasReducer,
});


export type RootState = ReturnType<typeof rootReducer>
