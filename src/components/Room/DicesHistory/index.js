import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DicesHistory = ({ diceOpen, dicesResults }) => (
  <div className={!diceOpen ? 'dices-history-toggle dices-history' : 'dices-history'}>
    <div className="dices-history-content">
      <p className="dices-history-title">Dices History</p>
      {dicesResults.map((result) => (
        <p key={result.id}>Un dé {result} a été lancé.</p>
      ))}
    </div>
  </div>
);

DicesHistory.propTypes = {
  diceOpen: PropTypes.bool.isRequired,
  dicesResults: PropTypes.arrayOf(
    PropTypes.shape({
      result: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default DicesHistory;
