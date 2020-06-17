import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from 'semantic-ui-react';
import Field from './Field';
import './style.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <>
      <div className="login-register">
        <p>Pas encore inscrit ?</p>
        <Button
          animated="fade"
          className="login-register-button"
        >
          <Button.Content visible>Connectez-vous</Button.Content>
          <Button.Content hidden>CURCUBITACE!</Button.Content>
        </Button>
      </div>

      <div className="login">
        {isLogged && (
          <div className="login-form-logged">
            <p className="login-form-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="login-form-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        )}
        {!isLogged && (
          <Grid className="center aligned login-form">
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Field required>
                <label>E-mail</label>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={changeField}
                  value={email}
                />
              </Form.Field>
              <Form.Field required>
                <label>Mot de passe</label>
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onChange={changeField}
                  value={password}
                />
              </Form.Field>
              <Button color="grey" type="submit" className="center aligned">
                Connectez-vous !
              </Button>
            </Form>
          </Grid>
        )}
      </div>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
