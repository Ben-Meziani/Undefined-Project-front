import React from 'react';

import Header from '../../containers/ConnectedHome/Header';
import WelcomeMessage from './WelcomeMessage';
import JoinRoomIcon from './Icons/JoinRoomIcon';
import CreateRoomIcon from './Icons/CreateRoomIcon';
import ProfileIcon from './Icons/ProfileIcon';

import './style.scss';

const ConnectedHome = ({  }) => (
  <div className="connected-home">
    <Header />
    <div className="connected-home-infos">
      <p className="connected-home-infos-notification">Vous êtes bien connecté(e) !</p>
    </div>
    <WelcomeMessage />
    <div className="connected-home-icons">
      <ProfileIcon />
      <JoinRoomIcon />
      <CreateRoomIcon />
    </div>
    <button type="button" className="connected-home-button">Se déconnecter</button>
  </div>
);

export default ConnectedHome;
