import React from 'react';
import PropTypes from 'prop-types';

import DiceResult from './DiceResult';

import './style.scss';

const DicesHistory = ({ diceOpen, dicesResults }) => {
  return (
    <div className={!diceOpen ? 'dices-history-toggle dices-history' : 'dices-history'}>
      <h1 className="dices-history-title">Dices History</h1>
      <div className="dices-history-content">
        <div className="dices-history-content-border">
          {dicesResults.map((result) => (
            <DiceResult key={result.id} {...result} />
          ))}
          <div className="scrollbar">
            <div className="force-overflow" />
          </div>
        </div>
      </div>
    </div>
  );
};

DicesHistory.propTypes = {
  diceOpen: PropTypes.bool.isRequired,
  dicesResults: PropTypes.arrayOf(
    PropTypes.shape({
      result: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default DicesHistory;
