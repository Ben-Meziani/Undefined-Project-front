import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ButtonsNav = () => (
  <>
    <Link to="/login">
      <button
        type="button"
        className=" homepage-navbutton-login"
      >
        Login
      </button>
    </Link>

    <Link to="/register">
      <button
        type="button"
        className="homepage-navbutton-register"
      >
        Register
      </button>
    </Link>
  </>
);

export default ButtonsNav;
