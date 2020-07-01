import React from 'react';
import PropTypes from 'prop-types';

import PlayersMenu from '../../../containers/Room/NavBarRoom/PlayersMenu';
import ToggleMenu from '../../../containers/Room/NavBarRoom/ToggleMenu';

import './style.scss';

const NavBarRoom = ({ roomName }) => (
  <div className="navBarRoom">
    <PlayersMenu />
    <div className="navBarRoom-title">
      <h1>Vous êtes dans la room : </h1>
      <div className="room-name">{roomName}</div>
    </div>
    <ToggleMenu />
  </div>

);

NavBarRoom.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default NavBarRoom;
