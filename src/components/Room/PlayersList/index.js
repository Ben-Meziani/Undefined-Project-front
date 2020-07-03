/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import Player from './Player';

import './style.scss';

const PlayersList = ({
  playersList,
  playersOpen,
  toggleOpenPlayers,
}) => (
  <div className="players-list-container">
    <div className={!playersOpen ? 'players-list-toggle players-list' : 'players-list'}>
      <h1 className="players-list-title">Players's list</h1>
      <button type="button" onClick={toggleOpenPlayers}><Icon name="close" size="large" /></button>
      {playersList.map((player) => (
        <div className="players-list-items">
          <Player key={player.id} {...player} />
        </div>
      ))}
    </div>
  </div>
);

PlayersList.propTypes = {
  playersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  playersOpen: PropTypes.bool.isRequired,
  toggleOpenPlayers: PropTypes.func.isRequired,
};

export default PlayersList;
