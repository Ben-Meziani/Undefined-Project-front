import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import magician from '../../../../assets/icons/magician.png';

const magicianUrl = `https://undefined-project.tk/${magician}`;

const Player = ({ pseudo/* , icon */ }) => (
  <div className="player">
    <div className="player-pseudo">
      <p>{ pseudo }</p>
    </div>
    <div className="player-icon">
      <img src={magicianUrl} alt="avatar" />
    </div>
  </div>
);

Player.propTypes = {
  pseudo: PropTypes.string.isRequired,
 /*  icon: PropTypes.string.isRequired, */
};

export default Player;
