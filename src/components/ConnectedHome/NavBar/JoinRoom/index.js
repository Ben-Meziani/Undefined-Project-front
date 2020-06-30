import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './style.scss';

const JoinRoomIcon = () => (
  <Modal className="join-room-modal" trigger={<div className="join-room-button">Rejoindre une room</div>}>
    <Modal.Header>Rejoindre une salle de jeu</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        {/* <form className="ui form">
          <div className="field">
            <label htmlFor="room-name">Rejoindre :</label>
            <input type="text" name="room-name" placeholder="Indiquez le nom de la salle" />
          </div>
          <div className="field">
            <button className="ui button join-room-submit" type="submit">Rejoindre la salle</button>
          </div>
        </form> */}
        <Link to="/room">Rejoingez la room!</Link>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default JoinRoomIcon;
