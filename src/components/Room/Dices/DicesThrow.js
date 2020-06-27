import React from 'react';
import PropTypes from 'prop-types';
import DiceValue from './DiceValue';
import './style.scss';

const DicesThrow = ({ dice, fetchResult }) => {
  const handleClick = () => {
    // fetchResult();
  };
  return (
    <div className="dices">
      <div className="dices-result">
        {dice.map((diceItem) => (
          <DiceValue key={diceItem.type} {...diceItem} />
        ))}
      </div>
      <button
        label="button"
        type="button"
        onClick={handleClick}
        className="dices-throw"
      >
        Throw it!
      </button>
    </div>
  );
};

DicesThrow.propTypes = {
  dice: PropTypes.arrayOf(
    PropTypes.shape({ }),
  ).isRequired,
  // fetchResult: PropTypes.func.isRequired,
};

export default DicesThrow;
