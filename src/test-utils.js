import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import rootReducer from "./store/reducers";


export const renderWithRouter = (component) => {
	const history = createMemoryHistory();
	
	return {
		...render (
			<Router history={ history }>
				{ component }
			</Router>
		)
	}
}


export const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
	return {
		...render(
			<Provider store={ store }>
				{ component }
			</Provider>
			, store
		)
	}
}

export const renderWithRouterRedux = (component, { initialState, store = createStore(
	                                      rootReducer,
	                                      initialState,
	                                      applyMiddleware(thunk),
                                      ) } = {}
) => {
	const history = createMemoryHistory()
	
	return {
		...render(
			<Router history={ history }>
				<Provider store={ store }>
					{ component }
				</Provider>
			</Router>
			, store
		),
		store
	}
}
