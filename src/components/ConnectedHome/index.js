import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from '../../containers/ConnectedHome/Header';
import RainDropAnimation from './RaindropAnimation';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';
import EditProfile from '../../containers/ConnectedHome/EditProfile';

import './style.scss';

const ConnectedHome = () => (
  <div className="connected-home">
    <Switch>
      <Route exact path="/connected">
        <Header />
        <RainDropAnimation />
        <WelcomeMessage />
        <NavBar />
      </Route>
      <Route exact path="/edit">
      <Header />
        <EditProfile />
      </Route>
    </Switch>
  </div>
);

export default ConnectedHome;
