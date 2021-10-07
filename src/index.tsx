import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { persistor, store } from "./store";

import './main.css';
import App from './App';
import { ErrorFallback } from "./components/error-indicator.component";


ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <PersistGate persistor={ persistor }>
          <App />
        </PersistGate>
      </ErrorBoundary>
    </Provider>
  </Router>,
  document.getElementById('root')
);
