import React from 'react';
import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from './SharedView';
import ChatButton from '../../containers/Room/ChatButton';
import ToolsMenu from './ToolsMenu';

const RoomStatic = () => (
  <div>
    <NavBarRoom />
    <SharedView />
    <ChatButton />
    <ToolsMenu />
  </div>
);

export default RoomStatic;
