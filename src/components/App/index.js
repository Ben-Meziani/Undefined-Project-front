// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Import containers
import ConnectedHome from 'src/containers/ConnectedHome';

// == Composant
const App = ({ fetchUserDatas }) => {
  /* useEffect(fetchUserDatas, []); */
  return (
    <div className="app">
      <ConnectedHome />
    </div>
);
};

App.propTypes = {
  fetchUserDatas: PropTypes.func.isRequired,
};

// == Export
export default App;
