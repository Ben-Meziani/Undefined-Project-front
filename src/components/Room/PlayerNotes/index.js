/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import SendNote from '../../../containers/Room/PlayerNotes/SendNote';
import Note from './Note';

import './style.scss';

const PlayerNotes = ({ editOpen, toggleOpenEdit, playerNotes }) => {
  const containerElement = useRef(null);
  useEffect(() => {
    // console.log('target', containerElement);
    const scrollY = containerElement.current.scrollHeight;
    containerElement.current.scrollTo(0, scrollY);
  }, [playerNotes]);
  return (
    <div
      className={!editOpen ? 'player-notes-toggle player-notes' : 'player-notes'}
    >
      <button type="button" onClick={toggleOpenEdit}><Icon name="close" size="large" /></button>
      <div
        className="player-notes-notes"
        ref={containerElement}
      >
        <h1 className="player-notes-title">Notes</h1>
        {playerNotes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
      <SendNote />
    </div>
  );
};

PlayerNotes.propTypes = {
  editOpen: PropTypes.bool.isRequired,
  toggleOpenEdit: PropTypes.func.isRequired,
  playerNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PlayerNotes;
