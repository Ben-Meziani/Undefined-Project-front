import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import NavBarRoom from '../../containers/Room/NavBarRoom';
import SharedView from '../../containers/Room/SharedView';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from '../../containers/Room/DicesHistory';
import DicesThrow from '../../containers/Room/DicesThrow';
import PlayerNotes from '../../containers/Room/PlayerNotes';
import PlayersList from '../../containers/Room/PlayersList';
import SharedFiles from '../../containers/Room/SharedFiles';
import ShareMedia from '../../containers/Room/ShareMedia';
import ToolsMenu from '../../containers/Room/ToolsMenu';

import Hallows from '../../assets/icons/deathly-hallows.png';
import Star from '../../assets/icons/star.png';

import './style.scss';

const HallowsUrl = `https://undefined-project.tk/${Hallows}`;
const StarUrl = `https://undefined-project.tk/${Star}`;

const Room = ({ idForJoin }) => {
  return (
    <div className="room-container">
      <div className="static-room">
        <Switch>
          <Route path={`/room/${idForJoin}/view/shareview`} exact>
            <NavBarRoom />
            <PlayersList />
            <SharedView />
            <Chatroom />
            <div className="hallows"><img src={HallowsUrl} alt="sigle" /></div>
            <div className="tools">
              <ToolsMenu />
              <SharedFiles />
              <DicesThrow />
              <DicesHistory />
              <PlayerNotes />
              <ShareMedia />
              <div className="star"><img src={StarUrl} alt="star" /></div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

Room.propTypes = {
  idForJoin: PropTypes.number.isRequired,

};

export default Room;
