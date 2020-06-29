import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <div className="homePage-header">
    <h1 className="homePage-header-title">
      <Link to="/">
        Undefined::Role-Play
      </Link>
    </h1>
  </div>
);

export default Header;
