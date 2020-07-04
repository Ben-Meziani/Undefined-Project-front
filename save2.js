/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import joinIcon from '../../../../assets/icons/bookmenu.svg';
import Field from '../../../HomePage/Forms/Field';
import './style.scss';

const JoinRoom = ({
  joinRoom,
  changeValue,
  idForJoin,
  passForJoin,
  roomId,
  joinedRoom,
  errorJoinedRoom,
  loading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    joinRoom();
  };
  console.log('joinedRoom dans la modale vaut', joinedRoom);
  return (
    <Modal
      className="join-room-modal"
      trigger={<div className="join"><div className="join-container"><img src={joinIcon} alt="join" /><div className="join-text">Rejoindre</div></div></div>}
    >
      <Modal.Header>Rejoindre une Salle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          { !joinedRoom && (
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="idForJoin">
                  Indiquez le code-name que votre M-J vous a communiqué
                </label>
                <Field
                  type="text"
                  placeholder="Code Name de la room"
                  name="idForJoin"
                  changeValue={changeValue}
                  value={idForJoin}
                />
              </div>
              <div className="field">
                <label htmlFor="idForPass">
                  Indiquez le mot de passe que votre M-J vous a communiqué
                </label>
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  name="passForJoin"
                  changeValue={changeValue}
                  value={passForJoin}
                />
              </div>
              <div className="field">
                <button className="ui button join-room-submit" type="submit">Valider</button>
              </div>
              {errorJoinedRoom && !loading && (<p> La Salle n'existe pas, ou les identifiants sont erronés.</p>) }
            </form>
          )}
          {loading && (
            <div className="register-loader">
              <Loader active inline="centered" />
            </div>
          )}
          {joinedRoom && !loading && (<Link to={`/room/${roomId}/view`}>Rejoindre la Salle!</Link>) }
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

JoinRoom.propTypes = {
  joinRoom: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  passForJoin: PropTypes.string.isRequired,
  idForJoin: PropTypes.string.isRequired,
  roomId: PropTypes.string,
  joinedRoom: PropTypes.bool.isRequired,
  errorJoinedRoom: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

JoinRoom.defaultProps = {
  roomId: '',
};

export default JoinRoom;
