import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './style.scss';

const ToggleMenu = ({ handleLogout, toggleShareOpen }) => (
  <div className="toggle-menu">
    <Menu>
      <li><Link to="/" onClick={handleLogout}>Se déconnecter</Link></li>
      <li><Link to="/dashboard">Quitter la room</Link></li>
      <li><button onClick={toggleShareOpen} className="share-media-button" type="button">Partager un media</button></li>
    </Menu>
  </div>
);

ToggleMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleShareOpen: PropTypes.func.isRequired,
};

export default ToggleMenu;
