import React from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

const CreateRoom = ({ handleDropdown, saveValue, playersNb, addRoom }) => {
  const changeValue = (evt) => {
    saveValue(evt.target.value);
  };
  const dropdownChange = (e, value) => {
    handleDropdown(value.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* addRoom(); */
  };

  return (
      <Modal className="create-room-modal" trigger={<div className="create-room-button">Créer une room</div>}>
      <Modal.Header>Créer une salle de jeu</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="room-name">Choisissez un nom pour votre salle</label>
              <input onChange={changeValue} type="text" name="room-name" placeholder="Nom de la salle" />
            </div>
            <Dropdown
              onChange={dropdownChange}
              options={[
                { key: 1, text: '1', value: 1 },
                { key: 2, text: '2', value: 2 },
                { key: 3, text: '3', value: 3 },
                { key: 4, text: '4', value: 4 },
              ]}
              placeholder="Indiquez le nombre de joueurs"
              selection
              value={playersNb}
            />
            <div className="field">
              <button className="ui button create-room-submit" type="submit" >Créer la salle</button>
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

CreateRoom.propTypes = {
  playersNb: PropTypes.number,
  saveValue: PropTypes.func.isRequired,
  handleDropdown: PropTypes.func.isRequired,
 /*  addRoom: PropTypes.func.isRequired, */
};

CreateRoom.defaultProps = {
  playersNb: 0,
};

export default CreateRoom;
