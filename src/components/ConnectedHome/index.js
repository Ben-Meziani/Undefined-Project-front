import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from '../../containers/ConnectedHome/Header';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';

import './style.scss';

const ConnectedHome = () => (
  <div className="connected-home">
    <Switch>
      <Route exact path="/">
        <Header />
        <WelcomeMessage />
        <NavBar />
      </Route>
    </Switch>
  </div>
);

export default ConnectedHome;
