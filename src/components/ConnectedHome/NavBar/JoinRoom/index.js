import React from 'react';
import { Modal } from 'semantic-ui-react';

import Arrow from '../../../../assets/icons/JoinRoomIcon.svg';

import './style.scss';

const JoinRoomIcon = () => (
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

export default JoinRoomIcon;
