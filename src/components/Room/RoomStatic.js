import React from 'react';
import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from './SharedView';
import ChatButton from '../../containers/Room/ChatButton';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from './DicesHistory';
import DicesThrow from '../../containers/Room/DicesThrow';
import PlayerNotes from './PlayerNotes';
import PlayersList from '../../containers/Room/PlayersList';
import SharedFiles from './SharedFiles';
import ToolsMenu from './ToolsMenu';

import './style.scss';

const RoomStatic = () => (
  <div className="static-room">
    <NavBarRoom />
    <SharedView />
    <ChatButton />
    <Chatroom />
    <DicesThrow />
    <DicesHistory />
    <PlayerNotes />
    <PlayersList />
    <SharedFiles />
    <SharedView />
    <ToolsMenu />
  </div>
);

export default RoomStatic;
