import { FiltersAction, IFiltersActionTypes, IFiltersState } from "../../types/filters.type";


const initialState: IFiltersState = {
	category: null,
	sortBy: {
		type: 'popular',
		order: 'desc',
	},
};


const filtersReducer = (state = initialState, action: FiltersAction): IFiltersState => {
	switch (action.type) {
		case IFiltersActionTypes.SET_SORT_BY:
			return { ...state, sortBy: action.payload };

		case IFiltersActionTypes.SET_CATEGORY:
			return { ...state, category: action.payload, };

		default:
			return state;
	}
};


export default filtersReducer;
