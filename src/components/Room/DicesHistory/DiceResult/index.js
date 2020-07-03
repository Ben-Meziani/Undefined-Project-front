import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DiceResult = ({ result }) => (
  <div className="dices-history-result">
    <div className="dices-history-result-item">
      {!(result === 0) ? (
        <><p>Vous avez lancé un dé de {result}.</p><hr /></>)
        : ''}
    </div>
  </div>
);

DiceResult.propTypes = {
  result: PropTypes.number.isRequired,
};

export default DiceResult;
