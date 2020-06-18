import React from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';

// import components

import Plus from 'src/assets/icons/AddRoomIcon.svg';

import './style.scss';

const EditProfileModal = () => {
  return (
    <Modal className="edit-profile-modal" trigger={<img src={Plus} className="edit-profile-icon-svg" alt="plus" />}>
      <Modal.Header>Créer une salle de jeu</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form">
            <div className="field">
              <label htmlFor="room-name">Choisissez un nom pour votre salle</label>
              <input type="text" name="room-name" placeholder="Nom de la salle" />
            </div>
            <div className="field">
              <label htmlFor="players">Indiquez le nombre de joueurs</label>
              <input type="text" name="players" placeholder="10 joueurs maximum" />
            </div>
            <div className="field">
              <button className="ui button" type="submit">Créer la salle</button>
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default EditProfileModal;