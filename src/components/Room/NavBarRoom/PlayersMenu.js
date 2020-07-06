import React from 'react';
import PropTypes from 'prop-types';

import Friends from '../../../assets/icons/jobless.png';

const FriendsUrl = `https://undefined-project.tk/${Friends}`;

const PlayersMenu = ({ toggleOpenPlayers }) => {
  return (
    <div className="playersMenu">
      <button type="button" className="toolsMenu-button" onClick={toggleOpenPlayers}>
        <img src={FriendsUrl} alt="dude" />
      </button>
    </div>
  );
};

PlayersMenu.propTypes = {
  toggleOpenPlayers: PropTypes.func.isRequired,
};

export default PlayersMenu;
