import React from 'react';

// import components
import CreateRoom from '../../../containers/ConnectedHome/CreateRoom';
import JoinRoomIcon from './JoinRoom';
import joinIcon from '../../../assets/icons/bookmenu.svg';
import createIcon from '../../../assets/icons/feather.svg';

import './style.scss';

const NavBar = () => (
  <div className="dashboard-main-container-nav">
{/*     <CreateRoom />
    <JoinRoomIcon /> */}
    <div className="join"><img src={joinIcon} alt="join" /></div>
    <div className="create"><img src={createIcon} alt="create" /></div>
  </div>
);

export default NavBar;
