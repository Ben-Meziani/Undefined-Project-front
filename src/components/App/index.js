// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import HeaderHome from 'src/components/HeaderHome';
import Login from 'src/containers/Login';
import './style.scss';

// == Composant
const App = ({ checkIsLogged }) => {
  useEffect(checkIsLogged, []);

  return (
    <div className="app">
      <HeaderHome />
      <Login />
    </div>
  );
};

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
