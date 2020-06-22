import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const ButtonsNav = () => (
  <div className="homepage-navbutton">

    <button
      type="button"
      className=" homepage-navbutton-login"
    >
      <NavLink to="/login">
        Login
      </NavLink>
    </button>

    <button
      type="button"
      className="homepage-navbutton-register"
    >
      <NavLink to="/register">
        Register
      </NavLink>
    </button>

  </div>
);

export default ButtonsNav;
