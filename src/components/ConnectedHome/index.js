import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from 'src/containers/ConnectedHome/Header';
import EditProfile from 'src/containers/ConnectedHome/EditProfile';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';

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
