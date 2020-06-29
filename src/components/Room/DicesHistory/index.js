import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DicesHistory = ({ diceOpen }) => (
  <div className={!editOpen ? 'player-notes-toggle player-notes' : 'player-notes'}>DicesHistory</div>
);

DicesHistory.propTypes = {
  diceOpen: PropTypes.bool.isRequired,
};

export default DicesHistory;
