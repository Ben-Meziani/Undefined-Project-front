import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DicesThrow = ({ dice, rollDice }) => {
  const handleClick = () => {
    rollDice();
  };
  return (
    <div className="dices">
      <div className="dices-result">
        {dice}
      </div>
      <div
        onClick={handleClick}
        className="dices-throw"
      >
        Throw the dice.
      </div>
    </div>
  );
};

DicesThrow.propTypes = {
  dice: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
};

export default DicesThrow;
