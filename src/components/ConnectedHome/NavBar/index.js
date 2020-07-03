import React from 'react';

// import components
import CreateRoom from '../../../containers/ConnectedHome/CreateRoom';
import JoinRoom from '../../../containers/ConnectedHome/JoinRoom';

/* import './style.scss'; */

const NavBar = () => (
  <div>
    <CreateRoom />
    <JoinRoom />
  </div>
);

export default NavBar;
