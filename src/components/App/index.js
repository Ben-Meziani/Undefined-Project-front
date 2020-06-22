// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import ConnectedHome from 'src/containers/ConnectedHome';

// == Import
import './style.scss';

// == Composant
const App = ({ fetchUserDatas }) => {
  useEffect(fetchUserDatas, []);

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          exact
          path="/connectedHome"
          component={ConnectedHome}
        />
      </Switch>
    </div>
  );
};

App.propTypes = {
  fetchUserDatas: PropTypes.func.isRequired,
};
// == Export
export default App;
