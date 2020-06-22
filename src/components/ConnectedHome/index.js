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

const ConnectedHome = ({ fetchUserDatas }) => {
/*   useEffect(fetchUserDatas, []); */
  return (
  <div className="connected-home">
    <Switch>

      <Route exact path="/connected">
        <Header />
        <RainDropAnimation />

        <WelcomeMessage />
        <NavBar />
      </Route>
      <Route exact path="/user/:userId/edit">
      <Header />
        <EditProfile />
      </Route>
    </Switch>
  </div>
)};

/* ConnectedHome.propTypes = {
  fetchUserDatas: PropTypes.func.isRequired,
}; */


export default ConnectedHome;
