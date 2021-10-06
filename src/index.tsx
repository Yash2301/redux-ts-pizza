import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";

import './main.css';
import App from './App';
import { persistor, store } from "./store";


ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
