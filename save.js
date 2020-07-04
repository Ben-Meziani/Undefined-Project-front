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



// MENU SIDEBAR

/* /* eslint-disable import/prefer-default-export
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 1005;
  top: 0;
  left: 0;
  
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  transition: transform 0.3s ease-in-out;

  .menu-dropdown-item {
    position: relative;
    font-size: 2em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    color: black;
    transition: color 0.3s linear;
    text-align: left;
    z-index: 1006;

    &:hover {
      color: red;
    }
    
    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: #231f20;
    }
  }
  
  @media (max-width: 400px) {
    width: 80%;
    margin-top: 0.5em;
  }

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
}

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  }
`; */

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: black;
  opacity: 0.9;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
 /*  z-index: 2000; */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 400px) {
    width: 80%;
  }
  @media (min-width: 767px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
  .menu-dropdown-item {
    font-size: 1em;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;
    button {
      margin-top: 2em;
      border: none;
      background: none;
      color: white;
      &:hover {
        color: brown;
      }
      @media (max-width: 400px) {
        margin-top: 0.5em;
      }

      @media (min-width: 1600px) {
        width: 100%;
      }
    }
    
 /*  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};
  } */
`;


  /*  <StyledMenu open={open}>
      <div className="menu-dropdown-item"><Link to="/" onClick={handleLogout}><button className="share-media-button" type="button">Se déconnecter</button></Link></div>
      <div className="menu-dropdown-item"><Link to="/dashboard"><button className="share-media-button" type="button">Quitter la room</button></Link></div>
      <div className="menu-dropdown-item"><button onClick={handleClose} className="share-media-button" type="button">Partager un media</button></div>
    </StyledMenu> */



    // FORM

    /* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Loader,
} from 'semantic-ui-react';
import Field from './Field';
import './style.scss';

const Login = ({
  email,
  password,
  changeValue,
  login,
  logged,
  loading,
  errorToLog,
  id,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login();
    // console.log(errorToLog);
  };
  console.log(logged);
  return (
    <div className="login">
      {!logged && (
      <Grid className="center aligned login-form">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Field required>
            <label>E-mail</label>
            <Field
              type="email"
              placeholder="Email"
              name="email"
              changeValue={changeValue}
              value={email}
            />
          </Form.Field>
          <Form.Field required>
            <label>Mot de passe</label>
            <Field
              type="password"
              placeholder="Mot de passe"
              name="password"
              changeValue={changeValue}
              value={password}
            />
            {errorToLog && !loading && (
              <p className="login-error">Ouille! Il semblerait que l'e-mail ou le mot de passe ne soit pas valide.</p>
            )}
            <Link to="/forgotten">
              <p className="login-forgotten">Mot de passe oublié ?</p>
            </Link>
          </Form.Field>
          <Button color="black" type="submit">
            Connectez-vous !
          </Button>
        </Form>
      </Grid>
      )}
      {loading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {logged && !loading ? <Redirect to={`/dashboard/user/${id}`} /> : <Redirect to="/login" />}
      {logged && !loading && (
      <div className="homepage-links">
        <p>Vous êtes bien connecté !</p>
        <Link to="/room">
          Allez sur la chatroom.
        </Link>
        <Link to="/dashboard">
          <p>dashboard</p>
        </Link>
      </div>
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
  errorToLog: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

Login.defaultProps = {
  loading: false,
};

export default Login;

