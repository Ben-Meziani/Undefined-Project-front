// == Import npm
import React from 'react';

// == Import
import HeaderHome from 'src/components/HeaderHome';
import Login from 'src/components/Login';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <HeaderHome />
    <Login />
  </div>
);

// == Export
export default App;
