import React from 'react';
import PropTypes from 'prop-types';

import Burger from 'react-css-burger';

import './style.scss';
/* import logo from '../../../assets/Logo1.png'; */

const Header = ({ toggleOpen, open }) => (
  <div className="connected-home-header">
   {/*  <div className="connected-home-logo">
        <img src={logo} alt="colored vector" />
      </div> */}
    <div className="dropdown-menu-button">
      <Burger
        active={open}
        burger="spring"
        hoverOpacity={1}
        color="#7f977d"
        scale={0.8}
        onClick={toggleOpen}
      />
    </div>
    <div className="connected-home-title">
      <h1>UNDEFINED::ROLE PLAY</h1>
    </div>
    <div className={open ? 'dropdown-menu-content dropdown-menu-content--open' : 'dropdown-menu-content'}>
      <div className="dropdown-menu-links">
        <ul>
          <li><a href="#">Se déconnecter</a></li>
          <li><a href="/edit">Modifier son profil</a></li>
        </ul>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Header;
