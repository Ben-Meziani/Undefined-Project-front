import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import RainDropAnimation from './RaindropAnimation';
import Header from '../../containers/ConnectedHome/Header';
import EditProfile from '../../containers/ConnectedHome/EditProfile';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';

import './style.scss';

const ConnectedHome = ({ logged, loading }) => {
  console.log(logged);
  return (
    <div className="connected-home">
      <Switch>
        <Route exact path="/dashboard">
          <Header />
          <RainDropAnimation />
          <WelcomeMessage />
          <NavBar />
        </Route>
        {/* TODO passer userId en props */}
        <Route exact path="/dashboard/user/:userId/edit">
          <Header />
          <EditProfile />
        </Route>
      </Switch>
      {!logged && !loading ? <Redirect to="/home" /> : <Redirect to="/dashboard" />}
    </div>
  );
};

ConnectedHome.propTypes = {
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ConnectedHome;
