import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ButtonsNav = () => (
  <>
    <button
      type="button"
      className=" homepage-navbutton-login"
    >
      <Link to="/login">
        Login
      </Link>
    </button>

    <button
      type="button"
      className="homepage-navbutton-register"
    >
      <Link to="/register">
        Register
      </Link>
    </button>
  </>
);

export default ButtonsNav;
