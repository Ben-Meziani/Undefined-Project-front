// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from '../../containers/HomePage';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import Presentation from '../HomePage/Carousel/Presentation';
import Demonstration from '../HomePage/Carousel/Demonstration';
import Team from '../HomePage/Carousel/Team';

import ConnectedHome from '../../containers/ConnectedHome';
import EditProfile from '../../containers/ConnectedHome/EditProfile';
import Room from '../Room';

// == Import
import './style.scss';

// == Composant
const App = ({ id }) => (
  <div className="app">
    <HomePage />
    
    <Switch>

{/*       <Route path="/" exact>
        <HomePage />
        <div className="homeDisplay" />
      </Route>

      <Route path="/login" exact>
        <HomePage />
        <div className="homeDisplay">
          <Login />
        </div>
      </Route>

      <Route path="/register" exact>
        <HomePage />
        <div className="homeDisplay">
          <Register />
        </div>
      </Route> */}

      <Route path="/dashboard" exact>
        <ConnectedHome />
      </Route>

      <Route path={`/dashboard/user/${id}/edit`} exact>
        <EditProfile />
      </Route>

      <Route path="/room" exact>
        <Room />
      </Route>
    </Switch>
  </div>
);

App.propTypes = {
  id: PropTypes.number.isRequired,
};

// == Export
export default App;
