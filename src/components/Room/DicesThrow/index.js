import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const DicesThrow = ({
  dice,
  rollDice,
  diceOpen,
  toggleOpenDice,
}) => {
  const handleClick = () => {
    rollDice();
  };
  return (
    <div className={!diceOpen ? 'dices dices-toggle' : 'dices'}>
      <button type="button" onClick={toggleOpenDice}><Icon name="close" size="large" /></button>
      <div className="dices-result">
        {dice}
      </div>
      <div
        onClick={handleClick}
        className="dices-throw"
      >
        Throw the dice
      </div>
    </div>
  );
};

DicesThrow.propTypes = {
  dice: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
  diceOpen: PropTypes.bool.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
};

export default DicesThrow;
