import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

import './style.scss';

const PlayersList = ({ playersList }) => (
  <div className="players-list">
    {playersList.map((player) => (
      <Player key={player.id} {...player} />
    ))}
  </div>
);

PlayersList.propTypes = {
  playersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PlayersList;
