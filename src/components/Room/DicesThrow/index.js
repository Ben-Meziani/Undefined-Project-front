/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';
import { Dices } from '../../../assets/icons/dices4.png';

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
        <img src={Dices} alt="dés" />
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
