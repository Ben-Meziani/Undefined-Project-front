import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import logo from '../../../assets/UndefinedLogoCorail2.png';
import menuIcon from '../../../assets/menuIcon.svg';

const Header = ({ toggleOpen, open }) => {
  console.log(open);
  return (
    <div className="connected-home-header">
      <div className="connected-home-logo">
        <img src={logo} alt="colored vector" />
      </div>
      <div className="dropdown-menu">
        {/* <button onClick={toggleOpen} className="dropdown-menu-button" type="button"> */}<img className="dropdown-menu-button" onClick={toggleOpen} src={menuIcon} alt="burger menu icon" />
        <div className={open ? 'dropdown-menu-content--open' : 'dropdown-menu-content'}>
          <ul className="menu-links">
            <li><a href="#">Se déconnecter</a></li>
            <li><a href="#">Modifier son profil</a></li>
          </ul>
        </div>
      </div>
    </div>
)
};

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Header;
