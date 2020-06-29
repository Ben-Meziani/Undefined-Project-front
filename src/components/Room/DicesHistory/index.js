import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const DicesHistory = ({ diceOpen, toggleOpenDice }) => (
  <div className={!diceOpen ? 'dices-history-toggle dices-history' : 'dices-history'}>
    <div className="dices-history-content">
      <p>Dices History</p>
    </div>
  </div>
);

DicesHistory.propTypes = {
  diceOpen: PropTypes.bool.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
};

export default DicesHistory;
