import React from 'react';
import { Link } from 'react-router-dom';

const CarouselMenu = () => (

  <div className="carousel-menu">
    <ul className="carousel-menu-list">
      <li><Link to="/home/demonstration">Démo</Link></li>
      <li><Link to="/home">Présentation</Link></li>
      <li><Link to="/home/team">Team</Link></li>
    </ul>
  </div>
);

export default CarouselMenu;
