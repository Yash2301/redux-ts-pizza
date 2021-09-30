export interface IFiltersState {
    category: number,
    sortBy: string,
}

export enum IFiltersActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY',
}

interface IFiltersSortByAction {
    type: IFiltersActionTypes.SET_SORT_BY,
    payload: string
}

interface IFiltersCategoryAction {
    type: IFiltersActionTypes.SET_CATEGORY,
    payload: number
}


export type FiltersAction =
  IFiltersSortByAction
  | IFiltersCategoryAction

