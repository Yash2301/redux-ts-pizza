import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup, ErrorIndicator } from '../components';

import { fetchPizzas } from "../store/actions-async/fetch-pizzas";
import { setCategory, setSortBy } from "../store/actions/filters.action";
import { addPizzaToCart } from "../store/actions/cart.action";
import { RootState } from "../store/reducers";

import { IFiltersSortByState } from "../types/filters.type";
import { IPizzasBlockNewObject } from "../types/pizzas.type";


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
  const { isLoaded, error } = useSelector(({ pizzas }: RootState) => pizzas);
  const { category, sortBy } = useSelector(({ filters }: RootState) => filters);
  const cartItems = useSelector(({ cart }: RootState) => cart.items);


  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [ category, sortBy, dispatch ]);


  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(setCategory(index));
  }, [ dispatch ]);

  const onSelectSortType = useCallback((type: IFiltersSortByState) => {
    dispatch(setSortBy(type));
  }, [ dispatch ]);

  const handleAddPizzaToCart = useCallback((newObj: IPizzasBlockNewObject) => {
    dispatch(addPizzaToCart(newObj));
  }, [ dispatch ]);

  const countPizzaOnId = (id: number) => cartItems.reduce((sum, item) => {
    return (item.id === id)
      ? sum + item.countItem
      : sum;
  }, 0)

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
        {  }
        { isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              onClickAddPizza={ handleAddPizzaToCart }
              addedCount={ countPizzaOnId(obj.id) }
              { ...obj }
              key={ obj.id }
            />
          ))
          : (error.length)
            ? <ErrorIndicator>{ error }</ErrorIndicator>
            : Array(12).fill(0)
            .map((_, index) => <PizzaLoadingBlock key={ index } />)
        }
      </div>
    </div>
  )
}


export default Home;
