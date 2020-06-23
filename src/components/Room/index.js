import React from 'react';
import ChatRoom from './ChatRoom';
import DicesHistory from './Dices/DicesHistory';
import DicesThrow from './Dices/DicesThrow';
import NavBarRoom from './NavBarRoom';
import Players from './Players';
import PlayerNotes from './PlayerNotes';
import SharedFiles from './SharedFiles';
import SharedView from './SharedView';

import './style.scss';

const Room = () => (

  <div>
    <NavBarRoom />
    <Players />
    <SharedView />
    <ChatRoom />
    <SharedFiles />
    <DicesHistory />
    <DicesThrow />
    <PlayerNotes />
  </div>

);

export default Room;
