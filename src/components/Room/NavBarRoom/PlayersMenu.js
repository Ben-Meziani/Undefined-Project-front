import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const PlayersMenu = () => (
  <div className="playersMenu">
    <Link to="/players-list">
      <Icon
        name="users"
        size="large"
      />
    </Link>
  </div>

);

export default PlayersMenu;
