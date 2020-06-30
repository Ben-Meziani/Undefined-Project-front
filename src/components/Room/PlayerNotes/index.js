import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const PlayerNotes = ({ editOpen, toggleOpenEdit }) => {
  return (
    <div
      className={!editOpen ? 'player-notes-toggle player-notes' : 'player-notes'}
    >
      <button type="button" onClick={toggleOpenEdit}><Icon name="close" size="large" /></button>
      <div className="player-notes-notes">
        <p className="player-notes-title">Player Notes</p>
      </div>
      <input type="text" placeholder="Write your notes here..."/>
    </div>
  );
};

PlayerNotes.propTypes = {
  editOpen: PropTypes.bool.isRequired,
  toggleOpenEdit: PropTypes.func.isRequired,
};

export default PlayerNotes;
