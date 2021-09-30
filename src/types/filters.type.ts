export interface IFiltersSortByState {
    type: string,
    order: string
}
export interface IFiltersState {
    category: null | number,
    sortBy: IFiltersSortByState
}


export enum IFiltersActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY',
}

interface IFiltersSortByAction {
    type: IFiltersActionTypes.SET_SORT_BY,
    payload: IFiltersSortByState
}

interface IFiltersCategoryAction {
    type: IFiltersActionTypes.SET_CATEGORY,
    payload: null | number
}


export type FiltersAction =
  IFiltersSortByAction
  | IFiltersCategoryAction

