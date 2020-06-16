import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import logo from '../../../assets/UndefinedLogo.png';

const Header = ({ toggleOpen }) => {
  return (
    <div className="connected-home-header">
      <div className="connected-home-logo">
        <img src={logo} alt="colored vector" />
      </div>
      <div className="connected-home-header-title">
        <h1>Undefined::role play</h1>
      </div>
      <div className="dropdown-menu">
        <button onClick={toggleOpen} className="dropdown-menu-button" type="button">...</button>
        <div className="dropdown-content">
          {/* <a href="#">Se déconnecter</a>
          <a href="#">Modifier son profil</a> */}
        </div>
      </div>
    </div>
)};

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

export default Header;
