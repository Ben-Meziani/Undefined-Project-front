import React from 'react';
import PropTypes from 'prop-types';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './style.scss';

const BurgerMenu = ({
  toggleOpen,
  handleLogout,
  id,
}) => {
  return (
    <>
      <div className="dashboard-header-menu">
        <Menu isOpen={toggleOpen}>
          <li><Link to="/" onClick={handleLogout}>Se déconnecter</Link></li>
          <li><Link to={`/dashboard/user/${id}/edit`}>Modifier son profil</Link></li>
        </Menu>
      </div>
    </>
  );
};

BurgerMenu.propTypes = {
  id: PropTypes.number.isRequired,
  handleLogout: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
