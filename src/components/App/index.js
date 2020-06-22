// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import ConnectedHome from 'src/containers/ConnectedHome';

// == Import
import './style.scss';

// == Composant
const App = () => {
  
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/">
          <HomePage />
        </Route>
        <Route
          exact
          path="/dashboard">
         <ConnectedHome />
         </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
