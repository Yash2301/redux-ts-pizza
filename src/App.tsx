import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import { Cart, Home } from "./pages";
import { Header } from "./components";
import { setPizzas } from "./store/actions/pizzas.action";

import { IPizzasJson } from "./types/main.type";
import { RootState } from "./store/reducers";


function App() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.pizzas.items);
  const filters = useSelector((state: RootState) => state.filters);

  const pizzaAction = (items: IPizzasJson[]) => {
    dispatch(setPizzas(items));
  }


  useEffect(() => {
    axios.get('db.json').then(({ data }) => {
      pizzaAction(data.pizzas);
    });
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={ items } />} exact />
        <Route path="/cart" component={ Cart } exact />
      </div>
    </div>
  );
}

export default App;