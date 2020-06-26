/* import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoomStatic from './RoomStatic';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from './Dices/DicesHistory';
import DicesThrow from './Dices/DicesThrow';
import PlayerNotes from './PlayerNotes';
import SharedFiles from './SharedFiles';
import SharedViewForm from './SharedView/SharedViewForm';

import './style.scss';

const Room = () => (

  <div className="currentRoom">

    <Switch>
      <Route path="/room" exact>
        <RoomStatic />
        <div className="displayTools">
          <p>Utilisez le menu ci-dessus pour accéder à vos outils de jeu</p>
        </div>
        <Chatroom />
      </Route>

      <Route path="/dices" exact>
        <RoomStatic />
        <div className="displayTools">
          <DicesThrow />
        </div>
        <Chatroom />
      </Route>

      <Route path="/room/history" exact>
        <RoomStatic />
        <div className="displayTools">
          <DicesHistory />
        </div>
        <Chatroom />
      </Route>

      <Route path="/room/notes" exact>
        <RoomStatic />
        <div className="displayTools">
          <PlayerNotes />
        </div>
        <Chatroom />
      </Route>

      <Route path="/room/files" exact>
        <RoomStatic />
        <div className="displayTools">
          <SharedFiles />
        </div>
        <Chatroom />
      </Route>

      <Route path="/room/share" exact>
        <RoomStatic />
        <div className="displayTools">
          <SharedViewForm />
        </div>
        <Chatroom />
      </Route>

    </Switch>
  </div>

);

export default Room;
 */
