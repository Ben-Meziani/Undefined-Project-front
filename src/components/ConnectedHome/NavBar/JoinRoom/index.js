/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import joinIcon from '../../../../assets/icons/bookmenu.svg';
import Field from '../../../HomePage/Forms/Field';
import './style.scss';

const JoinRoom = ({ joinRoom, changeValue, roomPassword }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    joinRoom();
  };

  return (
    <Modal
      className="join-room-modal"
      trigger={<div className="join"><div className="join-container"><img src={joinIcon} alt="join" /><div className="join-text">Rejoindre</div></div></div>}>
      <Modal.Header>Rejoindre une Salle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <Field
                type="password"
                placeholder="Mot de passe"
                name="roomPassword"
                changeValue={changeValue}
                value={roomPassword}
              />
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
};

JoinRoom.propTypes = {
  joinRoom: PropTypes.func.isRequired,
  roomPassword: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default JoinRoom;
