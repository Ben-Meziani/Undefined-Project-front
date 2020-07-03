import React from 'react';
import PropTypes from 'prop-types';

import PlayersMenu from '../../../containers/Room/NavBarRoom/PlayersMenu';
import ToggleMenu from '../../../containers/Room/NavBarRoom/ToggleMenu';

import Ornament from '../../../assets/ornament1.png';

import './style.scss';

const NavBarRoom = ({ roomName }) => (
  <div className="navBarRoom">
    <>
      <ToggleMenu />
    </>
    <div className="navBarRoom-title">
      <div className="room-name">{roomName}</div>
    </div>
    <div className="navBarRoom-ornament">
      <img src={Ornament} alt="arabesques" />
    </div>
    <>
      <PlayersMenu />
    </>
  </div>

);

NavBarRoom.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default NavBarRoom;
