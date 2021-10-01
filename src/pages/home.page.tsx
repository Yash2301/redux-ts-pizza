import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { RootState } from "../store/reducers";
import { fetchPizzas } from "../store/actions/pizzas.action";
import { setCategory, setSortBy } from "../store/actions/filters.action";

import { IFiltersSortByState } from "../types/filters.type";


export interface ISortItems {
  name: string,
  type: string,
  order: string
}


const categoryNames: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems: ISortItems[] = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.pizzas.items);
  const isLoaded = useSelector(({ pizzas }: RootState) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }: RootState) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);


  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type: IFiltersSortByState) => {
    dispatch(setSortBy(type));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={ category }
          onClickCategory={ onSelectCategory }
          items={ categoryNames }
        />

        <SortPopup
          activeSortType={ sortBy.type }
          items={ sortItems }
          onClickSortType={ onSelectSortType }
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        { isLoaded
          ? items.map((obj) => (
            <PizzaBlock key={ obj.id } { ...obj } />
          ))
          : Array(12).fill(0)
            .map((_, index) => <PizzaLoadingBlock key={ index } />)
        }
      </div>
    </div>
  )
}


export default Home;
