import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import RegisterForm from 'src/containers/RegisterForm';
import { NavLink } from 'react-router-dom';
import RegisterAvatar from './RegisterAvatar';
import './style.scss';

const Register = ({ submitted }) => (
  <>
    <div className="register-login">
      <p>Déjà inscrit ?</p>
      <Button
        animated="fade"
        className="register-login-button"
      >
        <Button.Content visible>Connectez-vous</Button.Content>
        <Button.Content hidden>CURCUBITACE!</Button.Content>
      </Button>
    </div>
    <div className="register">
      <>
        {!submitted && (
          <>
            <RegisterAvatar />
            <RegisterForm />
          </>
        )}
        {submitted && (
          <>
            <p>Vous êtes enregistré</p>
            <NavLink
              to="/dashboard"
              exact
            >
              Voir votre profil
            </NavLink>
          </>
        )}
      </>
    </div>


  </>
);

Register.propTypes = {
  submitted: PropTypes.bool.isRequired,
};

export default Register;
