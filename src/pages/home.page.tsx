import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { ErrorIndicator } from "../components/error-indicator.component";

import { fetchPizzas } from "../store/actions-async/fetch-pizzas";
import { setCategory, setSortBy } from "../store/actions/filters.action";
import { addPizzaToCart } from "../store/actions/cart.action";
import { RootState } from "../store/reducers";

import { IFiltersSortByState } from "../types/filters.type";
import { IPizzasBlockNewObject } from "../types/pizzas.type";
import { useTranslation } from "react-i18next";


export interface ISortItems {
  name: string,
  type: string,
  order: string
}


export const categoryNames: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
export const sortItems: ISortItems[] = [
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

  const { t } = useTranslation();


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

  // create error for test
  // @ts-ignore
  // const foo = bar;

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
          label={'Current Shop :'}
          onClickSortType={ onSelectSortType }
        />
      </div>
      <h2 className="content__title">{t('menu')}</h2>

      { (error.length)
        ? <ErrorIndicator>{ error }</ErrorIndicator>
        : <div className="content__items">
          { isLoaded
            ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={ handleAddPizzaToCart }
                addedCount={ countPizzaOnId(obj.id) }
                { ...obj }
                key={ obj.id }
              />
            ))
            : Array(12).fill(0)
              .map((_, index) => <PizzaLoadingBlock key={ index }/>)
          }
        </div>
      }
    </div>
  )
}


export default Home;
