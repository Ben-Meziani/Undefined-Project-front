import React from 'react';

import Arrow from './Arrow.svg';

import './style.scss';

const JoinRoomIcon = () => (
  <div className="join-room-icon">
    <img src={Arrow} className="join-room-icon-svg" alt="arrow in" />
  </div>
);

export default JoinRoomIcon;
