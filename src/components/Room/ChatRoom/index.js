import React from 'react';
import GeneralChannel from './GeneralChannel';
import MessageField from './MessageField';

import './style.scss';

const chatroomMessages = [
  {
    author: 'Harry Pot-de-Terre',
    content: 'Salut ',
    id: 1,
  },
  {
    author: 'Super Chat',
    content: 'Coucou',
    id: 2,
  },
  {
    author: 'Toto',
    content: 'Salut',
    id: 3,
  },
  {
    author: 'Alexis',
    content: 'Hello',
    id: 4,
  },
];

const ChatRoom = () => (
  <div className="chatroom">
    <GeneralChannel />
    <MessageField />
  </div>
);

export default ChatRoom;
