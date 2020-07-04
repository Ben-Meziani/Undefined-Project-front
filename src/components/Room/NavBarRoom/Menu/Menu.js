import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ handleLogout, toggleOpenShare, setOpen, open }) => {
  const handleClose = () => {
    toggleOpenShare();
    setOpen(!open);
  };
  return (
    <StyledMenu open={open}>
      <a href="/" onClick={handleLogout}>
        <span role="img" aria-label="deconnect">Se déconnecter</span>
      </a>
      <a href="/dashboard">
        <span role="img" aria-label="leave">Quitter la room</span>
      </a>
      <a href="#" onClick={handleClose}>
        <span role="img" aria-label="contact">Partager un media</span>
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default Menu;
