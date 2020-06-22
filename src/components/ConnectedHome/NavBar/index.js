import React from 'react';

// import components
import CreateRoom from 'src/containers/ConnectedHome/CreateRoom';
import JoinRoomIcon from './JoinRoom';

import './style.scss';

const NavBar = () => (
  <div className="navbar-menu">
    <CreateRoom />
    <JoinRoomIcon />
  </div>
);

export default NavBar;
