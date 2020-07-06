/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Dropdown, Loader, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import createIcon from '../../../../assets/icons/ink.png';
import Field from '../../../HomePage/Forms/Field';

import './style.scss';

const imageUrl = `https://undefined-project.tk/${createIcon}`;

const CreateRoom = ({
  changeValue,
  handleDropdown,
  roomName,
  roomPassword,
  roomId,
  playersNb,
  loading,
  createRoom,
}) => {
  const dropdownChange = (evt, value) => {
    evt.preventDefault();
    handleDropdown(value.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    createRoom();
  };
  return (
    <Modal
      className="create-room-modal"
      trigger={<div className="create"><div className="create-container"><div className="create-text">Créer</div><img src={imageUrl} alt="create" /></div></div>}
    >
      <Modal.Header>Créer une Salle</Modal.Header>

      {loading && (
        <>
          <Loader active inline="centered" />
        </>
      )}

      <div className="gm-join"><p>Vous êtes déjà <span>Game Master</span> ?</p> : <Link to={`/room/${roomId}/view`} className="gm-join-link"><p className="gm-join-link-text">Rejoignez votre Salle!</p></Link></div>
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

            <div className="field">
              <label htmlFor="room-pass">
                Choisissez un mot de passe
              </label>
              <Field
                className="create-room-form-input"
                type="password"

                placeholder="Mot de passe"
                name="roomPassword"
                changeValue={changeValue}
                value={roomPassword}
              />
            </div>

            <div className="field">
              <label htmlFor="room-players">
                Indiquez votre nombre de joueurs
              </label>
              <Dropdown
                onChange={dropdownChange}
                options={[
                  { key: 1, text: '1', value: 1 },
                  { key: 2, text: '2', value: 2 },
                  { key: 3, text: '3', value: 3 },
                  { key: 4, text: '4', value: 4 },
                  { key: 5, text: '5', value: 5 },
                  { key: 6, text: '6', value: 6 },
                  { key: 7, text: '7', value: 7 },
                  { key: 8, text: '8', value: 8 },
                  { key: 9, text: '9', value: 9 },
                  { key: 10, text: '10', value: 10 },
                ]}
                placeholder="Indiquez le nombre de joueurs"
                selection
                value={playersNb}
              />
            </div>

            <div className="field">
              {/* <button
                className="ui black button create-room-submit"
                type="submit"
              >
                Créer la salle
              </button> */}
              <Link to={`/room/${roomId}/view`}><Button type="submit" className="ui black button">Créer la salle</Button></Link>
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
  createdRoom: PropTypes.bool.isRequired,
  roomPassword: PropTypes.string.isRequired,
  roomId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  role: PropTypes.number.isRequired,
};

CreateRoom.defaultProps = {
  playersNb: 0,
  roomId: '',
};

export default CreateRoom;
