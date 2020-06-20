// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Import components
import ConnectedHome from '../../containers/ConnectedHome';

// == Composant
const App = ({ fetchUserDatas, logged }) => {
  /* useEffect(fetchUserDatas, []); */
  return (
    <div className="app">
      {logged && (<ConnectedHome />)}
      <ConnectedHome />
    </div>
);
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
  fetchUserDatas: PropTypes.func.isRequired,
};

// == Export
export default App;
