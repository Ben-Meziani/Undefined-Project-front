import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import RegisterForm from 'src/containers/RegisterForm';
import { NavLink } from 'react-router-dom';
import RegisterAvatar from './RegisterAvatar';
import './style.scss';

const Register = ({ submitted, loading }) => (
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
        {submitted && !loading (
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
        {loading && (
          <p>Loading</p>
        )}
      </>
    </div>


  </>
);

Register.propTypes = {
  submitted: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
};
Register.defaultProps = {
  loading: false,
};

export default Register;
