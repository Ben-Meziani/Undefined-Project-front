import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import RainDropAnimation from './RaindropAnimation';
import Header from '../../containers/ConnectedHome/Header';
import EditProfile from '../../containers/ConnectedHome/EditProfile';
/* import NavBar from './NavBar'; */
import WelcomeMessage from './WelcomeMessage';
import CreateRoom from '../../containers/ConnectedHome/CreateRoom';
import JoinRoomIcon from '../ConnectedHome/NavBar/JoinRoom';

import './style.scss';

const ConnectedHome = ({ logged, loading, id }) => {
  // console.log(logged);
  return (
    <Switch>
      <Route exact path="/dashboard">
        <div className="dashboard">
          <div className="dashboard-header">
            <Header />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-main-container">
              <div className="dashboard-main-container-display">
                <WelcomeMessage />
              </div>
              <div className="dashboard-main-container-nav">
                <JoinRoomIcon />
                <CreateRoom />
              </div>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

ConnectedHome.propTypes = {
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default ConnectedHome;
