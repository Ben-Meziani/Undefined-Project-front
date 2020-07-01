import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DicesHistory = ({ diceOpen, toggleOpenDice }) => (
  <div className={!diceOpen ? 'dices-history-toggle dices-history' : 'dices-history'}>
    <div className="dices-history-content">
      <p className="dices-history-title">Dices History</p>
    </div>
  </div>
);

DicesHistory.propTypes = {
  diceOpen: PropTypes.bool.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
};

export default DicesHistory;
