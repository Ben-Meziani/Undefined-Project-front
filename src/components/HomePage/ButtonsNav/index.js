import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ButtonsNav = () => (
  <div className="homepage-navbutton">

    <button
      type="button"
      className=" homepage-navbutton-login"
    >
      <Link to="/home/login">
        Login
      </Link>
    </button>

    <button
      type="button"
      className="homepage-navbutton-register"
    >
      <Link to="/home/register">
        Register
      </Link>
    </button>

  </div>
);

export default ButtonsNav;
