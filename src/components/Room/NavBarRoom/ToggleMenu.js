import React from 'react';
import Burger from 'react-css-burger';
import { Link } from 'react-router-dom';
import './style.scss';

const ToggleMenu = () => (

  <div className="dropdown">
    <div className="dropdown-button">
      <Burger
        burger="spring"
        hoverOpacity={1}
        color="#000000"
        scale={0.8}
      />
    </div>
    <div className="dropdown-content dropdown-content">
      <div className="dropdown-links">
        <ul>
          <li><Link to="/home">Se déconnecter</Link></li>
          <li><Link to="/dashboard/user/:userId/edit">Modifier son profil</Link></li>
          <li><Link to="/room/link">Lien de partage</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default ToggleMenu;
