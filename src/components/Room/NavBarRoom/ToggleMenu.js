/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Burger from 'react-css-burger';

import './style.scss';

const ToggleMenu = ({
  handleLogout,
  toggleOpenMenu,
  toggleOpenShare,
  active,
}) => {
  console.log('active vaut ', active);
  return (
    <>
      <Burger onClick={toggleOpenMenu} active={active} burger="spring" scale={0.6} color="white" />
      <div className="toggle-menu">
        <div className={active ? 'toggle-menu-dropdown--open toggle-menu-dropdown' : 'toggle-menu-dropdown'}>
          <div className="toggle-menu-dropdown--open-item"><Link to="/" onClick={handleLogout}>Se déconnecter</Link></div>
          <div className="toggle-menu-dropdown--open-item"><Link to="/dashboard">Quitter la room</Link></div>
          <div className="toggle-menu-dropdown--open-item"><button onClick={toggleOpenShare} className="share-media-button" type="button">Partager un media</button></div>
        </div>
      </div>
    </>
  );
};

ToggleMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  toggleOpenMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ToggleMenu;
