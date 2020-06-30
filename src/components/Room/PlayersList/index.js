/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import Player from './Player';

import './style.scss';

const PlayersList = ({ playersList, playersOpen, toggleOpenPlayers, masterRole }) => (
  <div className={!playersOpen ? 'players-list-toggle players-list' : 'players-list'}>
    <button type="button" onClick={toggleOpenPlayers}><Icon name="close" size="large" /></button>
    {playersList.map((player) => (
      <>
        <div className="master">
          {masterRole ? `${player.pseudo}` : ''}
        </div>
        <Player key={player.id} {...player} />
      </>
    ))}
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
  masterRole: PropTypes.bool.isRequired,
};

export default PlayersList;
