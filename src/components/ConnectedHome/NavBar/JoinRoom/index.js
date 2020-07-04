/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Loader, Button } from 'semantic-ui-react';
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

  return (
    <Modal
      trigger={<div className="join"><div className="join-container"><img src={joinIcon} alt="join" /><div className="join-text">Rejoindre</div></div></div>}
    >
      <Modal.Header>Rejoindre une salle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="idForJoin">
                Indiquez le code-name que votre Maître de Jeu vous a communiqué
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
                Mot de Passe
              </label>
              <Field
                type="password"
                placeholder="Mot de passe"
                name="passForJoin"
                changeValue={changeValue}
                value={passForJoin}
              />
            </div>
            {errorJoinedRoom && !loading
            && (<p> La Salle n'existe pas, ou les identifiants sont erronés.</p>)}
            <Modal.Actions>
              <Button type="submit">Rejoindre la salle</Button>
              {joinedRoom && <a href={`/api/room/${roomId}/view`}>Rejoindre la Salle</a>}
            </Modal.Actions>
          </form>
          <div className="register-loader">
            <Loader active inline="centered" />
          </div>
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
  role: PropTypes.number.isRequired,
};

JoinRoom.defaultProps = {
  roomId: '',
};

export default JoinRoom;
