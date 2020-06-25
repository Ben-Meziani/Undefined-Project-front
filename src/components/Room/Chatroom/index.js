import React from 'react';
import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from './MessageField';

import './style.scss';

const ChatRoom = () => (
  <div className="chatroom">
    <GeneralChannel />
    <MessageField />
  </div>
);

export default ChatRoom;
