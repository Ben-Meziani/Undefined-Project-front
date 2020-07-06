import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';


const Menu = ({
  handleLogout,
  toggleOpenShare,
  setOpen,
  open,
  id }) => {
  const handleClose = () => {
    toggleOpenShare();
    setOpen(!open);
  };
  return (
    <StyledMenu open={open}>
      <a href="/" onClick={handleLogout}>
        <span role="img" aria-label="deconnect">Se déconnecter</span>
      </a>
      <Link to={`/dashboard/user/${id}`}>Quitter la room</Link>
      <a href={`/dashboard/user/${id}`}>
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
  id: PropTypes.number.isRequired,
};
export default Menu;
