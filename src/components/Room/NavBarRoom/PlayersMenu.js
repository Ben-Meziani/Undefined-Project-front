import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const PlayersMenu = ({ toggleOpenPlayers }) => {
  return (
    <div className="playersMenu">
      <button type="button" className="toolsMenu-button" onClick={toggleOpenPlayers}>
        <Icon
          name="users"
          size="large"
        />
      </button>
    </div>
  );
};

PlayersMenu.propTypes = {
  toggleOpenPlayers: PropTypes.func.isRequired,
};

export default PlayersMenu;
