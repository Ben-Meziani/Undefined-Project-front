import React from 'react';
import PropTypes from 'prop-types';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import homeIcon from '../../../assets/icons/home.svg';

import './style.scss';

const Header = ({
  handleLogout,
  id,
}) => {
  return (
    <>
    <div className="connecter-home-header">
      <Menu>
        <li><Link to="/" onClick={handleLogout}>Se déconnecter</Link></li>
        <li><Link to={`/dashboard/user/${id}/edit`}>Modifier son profil</Link></li>
      </Menu>
    </div>
    <div className="dashboard-header">
      <div className="dashboard-header-title">
        <h1>Undefined::Role-Play</h1>
      </div>
    </div>
    </>
  );
};

Header.propTypes = {
  id: PropTypes.number.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
