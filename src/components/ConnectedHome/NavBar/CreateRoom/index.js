.0/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from '../../../HomePage/Forms/Field';

import './style.scss';

const CreateRoom = ({
  changeValue,
  handleDropdown,
  roomName,
  playersNb,
  createRoom,
}) => {
  const dropdownChange = (e, value) => {
    handleDropdown(value.value);
  };
  const handleSubmit = (evt) => {
    console.log('je lance la requête de création de room');
    evt.preventDefault();
    createRoom();
  };

  return (
    <Modal
      className="create-room-modal"
      trigger={<div className="create-room-button">Créer une room</div>}
    >
      <Modal.Header>Créer une salle de jeu</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="room-name">
                Choisissez un nom pour votre salle
              </label>
              <Field
                className="create-room-form-input"
                type="text"
                placeholder="Nom de la salle"
                name="roomName"
                changeValue={changeValue}
                value={roomName}
              />
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
              <button
                className="ui button create-room-submit"
                type="submit"
              >
                Créer la salle
              </button>
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

CreateRoom.propTypes = {
  changeValue: PropTypes.func.isRequired,
  playersNb: PropTypes.number,
  roomName: PropTypes.string.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
};

CreateRoom.defaultProps = {
  playersNb: 0,
};

export default CreateRoom;
