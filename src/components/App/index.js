// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Room from 'src/components/Room';
import ConnectedHome from '../../containers/ConnectedHome';

// == Import
import './style.scss';

// == Composant
const App = () => (
/*   useEffect(checkIsLogged, []); */
  <div className="app">

    <Route path="/home">
      <HomePage />
    </Route>

    <Route path="/dashboard">
      <ConnectedHome />
    </Route>
    <Route path="/room">
      <Room />
    </Route>
  </div>
);

/*
App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
}; */

// == Export
export default App;
