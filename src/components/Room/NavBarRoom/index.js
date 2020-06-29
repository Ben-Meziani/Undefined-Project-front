import React from 'react';
import PropTypes from 'prop-types';

import PlayersMenu from '../../../containers/Room/NavBarRoom/PlayersMenu';
import ToggleMenu from './ToggleMenu';

import './style.scss';

const NavBarRoom = ({ roomName }) => (
  <div className="navBarRoom">
    <PlayersMenu />
    <div className="navBarRoom-title">
      <h1>{roomName}</h1>
    </div>
    <ToggleMenu />
  </div>

);

NavBarRoom.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default NavBarRoom;
