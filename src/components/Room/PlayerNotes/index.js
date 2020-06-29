import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PlayerNotes = ({ editOpen }) => {
  return (
    <div
      className={!editOpen ? 'player-notes-toggle player-notes' : 'player-notes'}
    >
      <div className="player-notes-notes">
        <p>Player Notes</p>
      </div>
      <input type="text" />
    </div>
  );
};

PlayerNotes.propTypes = {
  editOpen: PropTypes.bool.isRequired,
};

export default PlayerNotes;
