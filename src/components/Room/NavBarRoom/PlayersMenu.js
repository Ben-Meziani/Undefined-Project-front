import React from 'react';
import { Icon } from 'semantic-ui-react';

const PlayersMenu = () => (
  <div>
    <ul className="dropdown-players">
      <Icon color="black" name="users" />
      <li className="dropdown-players-master"> JK.Rowling <Icon color="yellow" name="star" />
        <ul className="dropdown-players-options">
          <li className="dropdown-players-action">Envoyer un MP</li>
        </ul>
      </li>
      <li className="dropdown-players-player"> Harry Pot-de-Beurre
        <ul className="dropdown-players-options">
          <li className="dropdown-players-action">Envoyer un MP</li>
          <li className="dropdown-players-action">Voir la fiche</li>
        </ul>
      </li>
    </ul>
  </div>

);

export default PlayersMenu;
