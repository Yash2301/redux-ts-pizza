import { FiltersAction, IFiltersActionTypes, IFiltersSortByState } from "../../types/filters.type"


export const setSortBy = ({ type, order }: IFiltersSortByState): FiltersAction => ({
	type: IFiltersActionTypes.SET_SORT_BY,
	payload: { type, order },
});

export const setCategory = (catIndex: number | null): FiltersAction => ({
	type: IFiltersActionTypes.SET_CATEGORY,
	payload: catIndex,
});
