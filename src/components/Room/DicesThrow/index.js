/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import Dices from '../../../assets/icons/dices.svg';

import './style.scss';

const DicesThrow = ({
  dice,
  rollDice,
  diceOpen,
  toggleOpenDice,
  saveResults,
}) => {
  const handleClick = () => {
    rollDice();
    saveResults(dice);
  };
  return (
    <div className="dices-container">
      <div className={!diceOpen ? 'dices-toggle dices' : 'dices'}>
        <button type="button" onClick={toggleOpenDice}><Icon name="close" size="large" /></button>
        <div className="dices-result">
          <div>{dice}</div>
        </div>
        <div
          onClick={handleClick}
          className="dices-throw"
        >
          <div><img src={Dices} alt="throw" /></div>
        </div>
      </div>
    </div>
  );
};

DicesThrow.propTypes = {
  dice: PropTypes.number.isRequired,
  rollDice: PropTypes.func.isRequired,
  diceOpen: PropTypes.bool.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
  saveResults: PropTypes.func.isRequired,
};

export default DicesThrow;
