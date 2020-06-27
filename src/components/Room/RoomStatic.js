import React from 'react';
import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from './SharedView';
import ChatButton from '../../containers/Room/ChatButton';
import ToolsMenu from './ToolsMenu';

import './style.scss';

const RoomStatic = () => (
  <div className="static-room">
    <NavBarRoom />
    <SharedView />
    <ChatButton />
    <ToolsMenu />
  </div>
);

export default RoomStatic;
