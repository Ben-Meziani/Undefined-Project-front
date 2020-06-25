import React from 'react';
import GeneralChannel from './GeneralChannel';
import MessageField from './MessageField';

import './style.scss';

const chatMessages = [
  {
    author: 'Harry Pot-de-Terre',
    text: 'Salut.',
    id: 1,
  },
  {
    author: 'Reun Waizlé',
    text: 'Yo.',
    id: 2,
  },
  {
    author: 'Ermi Grangé',
    text: 'Vous vous faites encore la gueule ?',
    id: 3,
  },
  {
    author: 'Reun Waizlé',
    text: 'Je préfère juste ne pas parler aux traitres.',
    id: 4,
  },
  {
    author: 'Harry Pot-de-Terre',
    text: 'T\'es juste jaloux.',
    id: 7,
  },
  {
    author: 'Ermi Grangé',
    text: 'Vous êtes chiants.',
    id: 5,
  },
];

const ChatRoom = () => (
  <div className="chatroom">
    <GeneralChannel
      chatMessages={chatMessages}
    />
    <MessageField />
  </div>
);

export default ChatRoom;
