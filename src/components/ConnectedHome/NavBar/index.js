import React from 'react';

// import components
import CreateRoom from '../../../containers/ConnectedHome/CreateRoom';
import JoinRoomIcon from './JoinRoom';

/* import './style.scss'; */

const NavBar = () => (
  <div>
    <CreateRoom />
    <JoinRoomIcon />
  </div>
);

export default NavBar;
