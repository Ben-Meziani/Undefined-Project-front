import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ handleLogout, toggleOpenShare, open }) => {
  return (
    <StyledMenu open={open}>
      <div className="menu-dropdown-item"><Link to="/" onClick={handleLogout}><button className="share-media-button" type="button">Se déconnecter</button></Link></div>
      <div className="menu-dropdown-item"><Link to="/dashboard"><button className="share-media-button" type="button">Quitter la room</button></Link></div>
      <div className="menu-dropdown-item"><button onClick={toggleOpenShare} className="share-media-button" type="button">Partager un media</button></div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default Menu;
