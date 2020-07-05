import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import DashboardRaindrop from './DashboardRaindrop';
import Header from '../../containers/ConnectedHome/Header';
import EditProfile from '../../containers/ConnectedHome/EditProfile';
/* import NavBar from './NavBar'; */
import WelcomeMessage from './WelcomeMessage';
import CreateRoom from '../../containers/ConnectedHome/CreateRoom';
import JoinRoom from '../../containers/ConnectedHome/JoinRoom';
import BurgerMenu from '../../containers/ConnectedHome/BurgerMenu';

import './style.scss';

const ConnectedHome = ({ logged, loading, id, idForJoin }) => {
  console.log('logged dans Connected-home vaut', logged);
  console.log('loading dans Connected-home vaut', loading);
  console.log('id dans Connected-home vaut', id);
  return (
    <>
      <Switch>
        <Route exact path={`/dashboard/user/${id}`}>

          <div className="dashboard">
            <div className="dashboard-header">
              <Header />
              <DashboardRaindrop />
              <BurgerMenu />
              <div className="dashboard-header-title">
                <Link to="/">
                  <h1>Undefined::Role-Play</h1>
                </Link>
              </div>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-main-container">
                <div className="dashboard-main-container-display">
                  <WelcomeMessage />
                </div>
                <div className="dashboard-main-container-nav">
                  <JoinRoom />
                  <CreateRoom />
                </div>
              </div>
            </div>
            <Link to="/room">
           
              {/* <Link to={`/room/${roomId}/view`}> */}
              Allez sur la chatroom.
            </Link>
          </div>
        </Route>

        <Route exact path={`/dashboard/user/${id}/edit`}>
          <Header />
          <BurgerMenu />
          <div className="dashboard-header-title">
            <Link to="/">
              <h1>Undefined::Role-Play</h1>
            </Link>
          </div>
          <EditProfile />
        </Route>
      </Switch>
      {!logged && !loading ? <Redirect to="/" /> : <Redirect to={`/dashboard/user/${id}`} />}
    </>
  );
};

ConnectedHome.propTypes = {
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  idForJoin: PropTypes.number.isRequired,
};

export default ConnectedHome;
