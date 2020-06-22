// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import Dashboard from 'src/components/Dashboard';

// == Import
import './style.scss';

// == Composant
const App = ({ checkUserLogged }) => {

useEffect(checkUserLogged, []);

  return (
    <div className="app">
      <Route
        path="/"
        component={HomePage}
      />
    </div>
  );
};

App.propTypes = {
  checkUserLogged: PropTypes.func.isRequired,
};
// == Export
export default App;
