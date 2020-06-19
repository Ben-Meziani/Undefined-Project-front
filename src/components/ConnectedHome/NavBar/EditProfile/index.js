import React from 'react';

import UserProfile from './UserProfileW.svg';

import './style.scss';

const ProfileIcon = () => (
  <div className="user-profile-icon">
    <img src={UserProfile} className="user-profile-icon-svg" alt="user" />
  </div>
  <Modal trigger={<img src={Arrow} className="join-room-icon-svg" alt="arrow in" />}>
  <Modal.Header>Rejoindre une salle de jeu</Modal.Header>
  <Modal.Content image>
    <Modal.Description>
      <form className="ui form">
        <div className="field">
          <label htmlFor="room-name">Rejoindre :</label>
          <input type="text" name="room-name" placeholder="Indiquez le nom de la salle" />
        </div>
        <div className="field">
          <button className="ui button" type="submit">Rejoindre la salle</button>
        </div>
      </form>
    </Modal.Description>
  </Modal.Content>
</Modal>
);

export default ProfileIcon;