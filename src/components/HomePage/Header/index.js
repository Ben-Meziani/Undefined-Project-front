import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <div className="homePage-header">
    <div className="homePage-header-title">
      <Link to="/">
        <h1>Undefined::Role-Play</h1>
      </Link>
    </div>
  </div>
);

export default Header;
