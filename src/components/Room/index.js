import React from 'react';
import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from './SharedView';
import ChatButton from '../../containers/Room/ChatButton';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from '../../containers/Room/DicesHistory';
import DicesThrow from '../../containers/Room/DicesThrow';
import PlayerNotes from '../../containers/Room/PlayerNotes';
import PlayersList from '../../containers/Room/PlayersList';
import SharedFiles from '../../containers/Room/SharedFiles';
import ToolsMenu from '../../containers/Room/ToolsMenu';

import './style.scss';

const Room = () => (
  <div className="static-room">
    <NavBarRoom />
    <SharedView />
    <ChatButton />
    <Chatroom />
    <PlayersList />
    <ToolsMenu />
    <SharedFiles />
    <DicesThrow />
    <DicesHistory />
    <PlayerNotes />
  </div>
);

export default Room;
