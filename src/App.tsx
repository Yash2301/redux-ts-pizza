import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={ Home } exact />
      </div>
    </div>
  );
}

export default App;