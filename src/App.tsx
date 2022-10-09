import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Cart, Home, NotFound } from "./pages";
import { Header } from "./components";
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
  return (
    <div className="wrapper">
      <I18nextProvider i18n={i18n} >
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/cart" component={ Cart } exact />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
      </I18nextProvider>
    </div>
  );
}

export default App;