import React from 'react';
import PropTypes from 'prop-types';

import Burger from 'react-css-burger';
import { Link } from 'react-router-dom';

import titleBackground from 'src/assets/Fondtitre.png';
import homeIcon from 'src/assets/homeIcon.svg';

import './style.scss';

const Header = ({ toggleOpen, open, handleLogout }) => {
  return (
    <div className="connected-home-header">
      <Link to="/dashboard">
      <div className="home-button">
        <img src={homeIcon} alt="home" />
      </div>
      </Link>
      <div className="dropdown">
        <div className="dropdown-button">
          <Burger
            active={open}
            burger="spring"
            hoverOpacity={1}
            color="#000000"
            scale={0.8}
            onClick={toggleOpen}
          />
        </div>
        <div className={open ? 'dropdown-content dropdown-content--open' : 'dropdown-content'}>
          <div className="dropdown-links">
            <ul>
              <li><Link to="/home" onClick={handleLogout} onClick={toggleOpen}>Se déconnecter</Link></li>
              <li><Link to="/dashboard/user/:userId/edit" onClick={toggleOpen}>Modifier son profil</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="connected-home-title">
        <img src={titleBackground} alt="black paint" />
        <h1>UNDEFINED::ROLE PLAY</h1>
      </div>
      
    </div>
  )};

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
