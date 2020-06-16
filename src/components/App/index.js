// == Import npm
import React from 'react';

import './style.scss';

// == Import containers
import ConnectedHome from 'src/containers/ConnectedHome';

// == Composant
const App = () => (
  <div className="app">
    <ConnectedHome />
  </div>
);

// == Export
export default App;
