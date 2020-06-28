import React from 'react';
import PropTypes from 'prop-types';
import DiceValue from './DiceValue';
import './style.scss';

const DicesThrow = ({ dice, fetchResult, throwed, reroll }) => {
  const handleClick = () => {
    fetchResult();
  };
  const handleReroll = () => {
    reroll();
  };
  return (
    <div className="dices">
      <div className="dices-result">
        {dice.map((diceItem) => (
          <DiceValue key={diceItem.type} {...diceItem} />
        ))}
      </div>
      {!throwed && (
      <div
        onClick={handleClick}
        className="dices-throw"
      >
        Throw the dice.
      </div>
      )}
      {throwed && (
      <div
        label="button"
        type="button"
        onClick={handleReroll}
        className="dices-throw"
      >
        Wanna throw it again ?
      </div>
      )}
    </div>
  );
};

DicesThrow.propTypes = {
  dice: PropTypes.arrayOf(
    PropTypes.shape({ }),
  ).isRequired,
  fetchResult: PropTypes.func.isRequired,
  reroll: PropTypes.func.isRequired,
  throwed: PropTypes.bool.isRequired,
};

export default DicesThrow;
