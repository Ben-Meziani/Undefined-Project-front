import React from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// import components

import Plus from '../../../../assets/icons/AddRoomIcon.svg';

import './style.scss';

const CreateRoom = ({ handleDropdown, saveValue, playersNb }) => {
  const changeValue = (evt) => {
    saveValue(evt.target.value);
  };
  const dropdownChange = (value) => {
    console.log(playersNb);
    handleDropdown(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je lance la requête pour créer la room');
  };
  return (
    <Modal className="create-room-modal" trigger={<img src={Plus} className="create-room-icon-svg" alt="plus" />}>
      <Modal.Header>Créer une salle de jeu</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form">
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
              <button className="ui button" type="submit" onSubmit={handleSubmit}>Créer la salle</button>
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
};

CreateRoom.defaultProps = {
  playersNb: 0,
};

export default CreateRoom;