// == Import npm
import React from 'react';

// == Import
import HeaderHome from 'src/components/HeaderHome';
import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <HeaderHome />
    <Register />
  </div>
);

// == Export
export default App;
