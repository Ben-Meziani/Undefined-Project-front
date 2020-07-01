import React from 'react';
import PropTypes from 'prop-types';

import PlayersMenu from '../../../containers/Room/NavBarRoom/PlayersMenu';
import ToggleMenu from '../../../containers/Room/NavBarRoom/ToggleMenu';

import './style.scss';

const NavBarRoom = ({ roomName }) => (
  <div className="navBarRoom">
    <>
      <ToggleMenu />
    </>
    <div className="navBarRoom-title">
      <div className="room-name">{roomName}</div>
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
