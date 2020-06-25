import React from 'react';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from './Dices/DicesHistory';
import DicesThrow from './Dices/DicesThrow';
import NavBarRoom from './NavBarRoom';
import PlayerNotes from './PlayerNotes';
import SharedFiles from './SharedFiles';
import SharedView from './SharedView';
import ToolsMenu from './ToolsMenu';

import './style.scss';

const Room = () => (

  <div>
    <Chatroom />
  </div>

);

export default Room;
