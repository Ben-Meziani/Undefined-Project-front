import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from '../../containers/ConnectedHome/Header';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';
import EditProfile from '../../containers/ConnectedHome/EditProfile';

import './style.scss';

const ConnectedHome = () => (
  <div className="connected-home">
    <Header />
    <Switch>
      <Route exact path="/">
        <WelcomeMessage />
        <NavBar />
      </Route>
      <Route exact path="/edit">
        <EditProfile />
      </Route>
    </Switch>
  </div>
);

export default ConnectedHome;
