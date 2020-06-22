// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Import components
import ConnectedHome from '../../containers/ConnectedHome';

// == Composant
const App = ({ logged }) => {
 
  return (
    <div className="app">
      {logged && (<ConnectedHome />)}
      <ConnectedHome />
    </div>
);
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default App;
