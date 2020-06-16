import React from 'react';

import Plus from './Plus.svg';

import './style.scss';

const CreateRoomIcon = () => (
  <div className="create-room-icon">
    <img src={Plus} className="create-room-icon-svg" alt="plus" />
  </div>
);

export default CreateRoomIcon;