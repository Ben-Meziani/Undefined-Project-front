import React from 'react';
import PropTypes from 'prop-types';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './style.scss';

const BurgerMenu = ({
  /* toggleMenu, */
  handleLogout,
  id,
 /*  isOpen */
}) => {
/*   console.log('isOpen dans burgermenu vaut', isOpen); */
  return (
    <>
      <div className="dashboard-header-menu">
        <Menu /* isOpen={isOpen} onOpen={toggleMenu} onClose={toggleMenu} */>
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
 /*  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, */
};

export default BurgerMenu;
