import React from 'react';
import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from '../../../containers/Room/Chatroom/MessageField';

import './style.scss';

const ChatRoom = () => (
  <div className="chatroom">
    <GeneralChannel />
    <MessageField />
  </div>
);

export default ChatRoom;
