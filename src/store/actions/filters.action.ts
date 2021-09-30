import { FiltersAction, IFiltersActionTypes } from "../../types/filters.type"


export const setSortBy = (name: string): FiltersAction => ({
	type: IFiltersActionTypes.SET_SORT_BY,
	payload: name,
});

export const setCategory = (catIndex: number): FiltersAction => ({
	type: IFiltersActionTypes.SET_CATEGORY,
	payload: catIndex,
});
