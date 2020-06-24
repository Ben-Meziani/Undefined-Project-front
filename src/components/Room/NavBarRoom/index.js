import React from 'react';
import PlayersMenu from './PlayersMenu';
import ToggleMenu from './ToggleMenu';
import './style.scss';

const NavBarRoom = () => (
  <div className="navBarRoom">
    <PlayersMenu />
    <div className="navBarRoom-title">
      <h1>Harry Pot-de-Beurre <br/> et la Chambres des Kékés.</h1>
    </div>
    <ToggleMenu />
  </div>

);

export default NavBarRoom;
