/* import React from 'react';
import PropTypes from 'prop-types';

const Friendlist = ({ friends, curUsername, isLogged,}) => {
  console.log(friends);
  return (
    <>
      <h3 className="friendList-title">Les copaings</h3>
      <ul className="friendList">
        {/* Je recupère au dessus friendlist depuis le reducer
        qui est un tableau d'amis reçu en réponse de la
        requête axios à l'api.
        Ci-dessous, je le map pour recupéré un ami, je
        destructure cet ami pour récupérer son id et son username
        je m'en sers pour générer autant de <li> que d'amis
        */}
        {friends.map((friend) => (
          <Friend key={friend.friendDetails.id} {...friend} />
        ))}
      </ul>
    </>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
  // friendDetails: PropTypes.object.isRequired,
  curUsername: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Friendlist.propTypes = {
  playersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      curUsername: PropTypes.string.isRequired,
      isLogged: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Friendlist; */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Friend = ({ isAccepted, isAnswered, friendDetails }) => {
  if (isAccepted && isAnswered) {
    return ();
  }
  else return null
};

{isAccepted && isAnswered ? <li className="friendList--item">{friendDetails.username}</li> : ''}

Friend.propTypes = {
  isAccepted: PropTypes.bool.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default Friend;

    {/*  <div className="toggle-menu">
        <div className={active ? 'toggle-menu-dropdown--open toggle-menu-dropdown' : 'toggle-menu-dropdown'}>
          <div className="toggle-menu-dropdown--open-item"><Link to="/" onClick={handleLogout}>Se déconnecter</Link></div>
          <div className="toggle-menu-dropdown--open-item"><Link to="/dashboard">Quitter la room</Link></div>
          <div className="toggle-menu-dropdown--open-item"><button onClick={toggleOpenShare} className="share-media-button" type="button">Partager un media</button></div>
        </div>
      </div> */}


      /* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Burger from 'react-css-burger';
import { slide as Menu } from 'react-burger-menu';

import './style.scss';

const ToggleMenu = ({
  handleLogout,
  toggleOpenMenu,
  toggleOpenShare,
  active,
}) => {
  console.log('active vaut ', active);

  return (
    <>
      {/* <Burger onClick={toggleOpenMenu} active={active} burger="spring" scale={0.6} color="white" /> */}
      {/* <div className="toggle-menu">
        <div className={active ? 'toggle-menu-dropdown--open toggle-menu-dropdown' : 'toggle-menu-dropdown'}>
          <div className="toggle-menu-dropdown--open-item"><Link to="/" onClick={handleLogout}>Se déconnecter</Link></div>
          <div className="toggle-menu-dropdown--open-item"><Link to="/dashboard">Quitter la room</Link></div>
          <div className="toggle-menu-dropdown--open-item"><button onClick={toggleOpenShare} className="share-media-button" type="button">Partager un media</button></div>
        </div> */}
      {active ? (
        <>
          <Burger onClick={toggleOpenMenu} active={active} burger="spring" scale={0.6} color="white" />
            <Menu>
              <li><Link to="/" onClick={handleLogout}>Se déconnecter</Link></li>
              <li><Link to="/">Modifier son profil</Link></li>
            </Menu>
        </>
      ) : ''}
      {/*  </div> */}
    </>
  );
};

ToggleMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  toggleOpenMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ToggleMenu;
