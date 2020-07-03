import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import joinIcon from '../../../../assets/icons/bookmenu.svg';

import './style.scss';

const JoinRoomIcon = () => (
  <Modal
    className="join-room-modal"
    trigger={<div className="join"><div className="join-container"><img src={joinIcon} alt="join" /><div className="join-text">Rejoindre</div></div></div>}>
    <Modal.Header>Rejoindre une Salle</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <form className="ui form">
          <div className="field">
            <label htmlFor="room-name">Rejoindre :</label>
            <input type="text" name="room-name" placeholder="Indiquez le nom de la salle" />
          </div>
          <div className="field">
            <label htmlFor="room-password">Mot de passe :</label>
            <input type="password" name="room-password" placeholder="Indiquez le mot de passe" />
          </div>
          <div className="field">
            <button className="ui button join-room-submit" type="submit">Rejoindre la salle</button>
          </div>
        </form>
        {/* <Link to="/room">Rejoindre la room!</Link> */}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default JoinRoomIcon;
