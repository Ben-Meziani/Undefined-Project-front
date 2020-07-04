
      /* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Burger from 'react-css-burger';
import { slide as Menu } from 'react-burger-menu';

import './style.scss';

const ToggleMenu = ({
  handleLogout,
  toggleOpenMenu,
  toggleOpenShare,
  active,
}) => {
  console.log('active vaut ', active);

  return (
    <>
      {/* <Burger onClick={toggleOpenMenu} active={active} burger="spring" scale={0.6} color="white" /> */}
      {/* <div className="toggle-menu">
        <div className={active ? 'toggle-menu-dropdown--open toggle-menu-dropdown' : 'toggle-menu-dropdown'}>
          <div className="toggle-menu-dropdown--open-item"><Link to="/" onClick={handleLogout}>Se déconnecter</Link></div>
          <div className="toggle-menu-dropdown--open-item"><Link to="/dashboard">Quitter la room</Link></div>
          <div className="toggle-menu-dropdown--open-item"><button onClick={toggleOpenShare} className="share-media-button" type="button">Partager un media</button></div>
        </div> */}
      {active ? (
        <>
          <Burger onClick={toggleOpenMenu} active={active} burger="spring" scale={0.6} color="white" />
            <Menu>
              <li><Link to="/" onClick={handleLogout}>Se déconnecter</Link></li>
              <li><Link to="/">Modifier son profil</Link></li>
            </Menu>
        </>
      ) : ''}
      {/*  </div> */}
    </>
  );
};

ToggleMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  toggleOpenMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ToggleMenu;



// MENU SIDEBAR

/* /* eslint-disable import/prefer-default-export
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 1005;
  top: 0;
  left: 0;
  
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  transition: transform 0.3s ease-in-out;

  .menu-dropdown-item {
    position: relative;
    font-size: 2em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    color: black;
    transition: color 0.3s linear;
    text-align: left;
    z-index: 1006;

    &:hover {
      color: red;
    }
    
    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: #231f20;
    }
  }
  
  @media (max-width: 400px) {
    width: 80%;
    margin-top: 0.5em;
  }

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
}

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  }
`; */

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: black;
  opacity: 0.9;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
 /*  z-index: 2000; */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 400px) {
    width: 80%;
  }
  @media (min-width: 767px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
  .menu-dropdown-item {
    font-size: 1em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;
    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: white;
      &:hover {
        color: brown;
      }
      @media (max-width: 400px) {
        margin-top: 0.5em;
      }

      @media (min-width: 1600px) {
        width: 100%;
      }
    }
    
 /*  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  } */
`;


  /*  <StyledMenu open={open}>
      <div className="menu-dropdown-item"><Link to="/" onClick={handleLogout}><button className="share-media-button" type="button">Se déconnecter</button></Link></div>
      <div className="menu-dropdown-item"><Link to="/dashboard"><button className="share-media-button" type="button">Quitter la room</button></Link></div>
      <div className="menu-dropdown-item"><button onClick={handleClose} className="share-media-button" type="button">Partager un media</button></div>
    </StyledMenu> */
