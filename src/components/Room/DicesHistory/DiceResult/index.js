import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DiceResult = ({ result }) => (
  <div className="dices-history-result">
    <div className="dices-history-result-item">
      {!(result === 0) ? (
        <p>Un dé de {result} a été lancé.</p>)
        : ''}
    </div>
  </div>
);

DiceResult.propTypes = {
  result: PropTypes.number.isRequired,
};

export default DiceResult;
