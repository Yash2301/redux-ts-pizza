import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import filtersReducer from './filters.reducer';
import pizzasReducer from './pizzas.reducer';
import cartReducer from "./cart.reducer";


const persistConfig = {
	key: 'react-pizza',
	storage,
	whitelist: [ 'cart','pizzas' ]
};

const rootReducer = combineReducers({
	filters: filtersReducer,
	pizzas: pizzasReducer,
	cart: cartReducer
});


export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>
