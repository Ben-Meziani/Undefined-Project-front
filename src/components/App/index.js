// == Import npm
import React from 'react';

import { Route } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import ConnectedHome from '../../containers/ConnectedHome';

// == Import
import './style.scss';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/dashboard">
        <ConnectedHome />
      </Route>
    </div>
  );
};

// == Export
export default App;
