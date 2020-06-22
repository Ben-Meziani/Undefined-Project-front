import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import RainDropAnimation from './RaindropAnimation';
import Header from 'src/containers/ConnectedHome/Header';
import EditProfile from 'src/containers/ConnectedHome/EditProfile';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';

import './style.scss';

const ConnectedHome = () => {
  return (
  <div className="connected-home">
    <Switch>
      <Route exact path="/dashboard">
        <Header />
        <RainDropAnimation />
        <WelcomeMessage />
        <NavBar />
      </Route>
     {/* TODO passer userId en props*/}
      <Route exact path="/user/:userId/edit">
      <Header />
        <EditProfile />
      </Route>
    </Switch>
  </div>
)};

export default ConnectedHome;
