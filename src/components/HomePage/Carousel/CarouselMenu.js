import React from 'react';
import { Link } from 'react-router-dom';

const CarouselMenu = () => (

  <div className="carousel-menu">
    <ul className="carousel-menu-list">
      <li><Link to="/">Présentation</Link></li>
      <li><Link to="/demonstration">Démo</Link></li>
      <li><Link to="/team">Team</Link></li>
    </ul>
  </div>
);

export default CarouselMenu;
