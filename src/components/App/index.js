// == Import npm
import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Room from 'src/components/Room';
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
      <Route path="/room">
        <Room />
      </Route>
    </div>
  );
};

// == Export
export default App;
