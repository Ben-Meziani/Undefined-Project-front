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


/*     <Modal
      className="join-room-modal"
      trigger={<div className="join"><div className="join-container"><img src={joinIcon} alt="join" /><div className="join-text">Rejoindre</div></div></div>}
    >
      <Modal.Header>Rejoindre une Salle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
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
            {errorJoinedRoom && !loading && (<p> La Salle n'existe pas, ou les identifiants sont erronés.</p>) }
            {/* <div className="field"> */}
             /*  <button className="ui button join-room-submit" type="submit">Valider</button> */
            {/* </div> */}
      /*     </form>
          <div className="register-loader">
            <Loader active inline="centered" />
          </div>
          {joinedRoom && <a href={`/room/${roomId}/view`}>Rejoindre la Salle!</a>}
        </Modal.Description>
      </Modal.Content>
    </Modal> */

    
// RAINDROPS SIZES AND POSITION

.raindrop-animation{
  position: absolute;
  top: 0;
  z-index: 2;

  .raindrop1 img{
    width: 2em;
    position: absolute;
    left: 2em;
   /*  top: -10em; */
    
  }
  .raindrop2 img{
    width: 3em;
    position: absolute;
    left: 4em;
/*     top: -10.2em; */
  }
  .raindrop3 img{
    width: 1.7em;
    position: absolute;
    left: 7em;
/*     top: -11em; */
  }
  .raindrop4 img{
    width: 2.3em;
    position: absolute;
    left: 14em;
    /* top: -11.5em; */
  }
  .raindrop5 img{
    width: 1.2em;
    position: absolute;
    left: 20em;
/*     top: -10.8; */
  }
  .raindrop6 img{
    width: 2.7em;
    position: absolute;
    left: 30em;
    /* top: -9.9em; */
  }
  .raindrop7 img{
    width: 2.1em;
    position: absolute;
    left: 17em;
  /*   top: -9.9em; */
  }
  .raindrop8 img{
    width: 2.7em;
    position: absolute;
    left: 28em;
/*     top: -9.9em; */
  }
}

// ANIMATION

.raindrop1, .raindrop2, .raindrop3, .raindrop4, .raindrop5, .raindrop6, .raindrop7, .raindrop8 {
 position: relative;

  & img {
    transform: translateY(0);
    animation: falldown 1.4s ease;
    animation-fill-mode: forwards;
  }

  @keyframes falldown {
    0% {
      opacity: 0;
      z-index: 10;
      transform: translate(0, -100px) scale(1, 1);
    }
    50% {
      opacity: 1;
      z-index: 10;
      transform: translate(0, 0) scale(0.8, 1.2);
    }
    51% {
      opacity: 1;
      z-index: 10;
      margin-top: -10px;
      margin-left: -10px;
      border-width: 10px;
      transform: rotateX(70deg);
      animation-timing-function: cubic-bezier(.12, .41, .63, .99);
    }
    100% {
      opacity: 0;
      z-index: 1;
      margin-top: -200px;
      margin-left: -200px;
      border-width: 200px;
      transform: rotateX(70deg);
      animation-timing-function: cubic-bezier(.12, .41, .63, .99);
    }
  }
}

