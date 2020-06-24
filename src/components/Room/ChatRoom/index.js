import React from 'react';
import GeneralChannel from './GeneralChannel';
import MessageField from './MessageField';

import './style.scss';

const ChatRoom = () => (
  <div>
    <GeneralChannel />
    <MessageField />
  </div>
);

export default ChatRoom;
