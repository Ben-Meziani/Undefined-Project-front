/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from 'semantic-ui-react';
import Field from '../Field';
import './style.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
  loading,
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
          <Button.Content visible>Inscrivez-vous</Button.Content>
          <Button.Content hidden>CURCUBITACE!</Button.Content>
        </Button>
      </div>

      <div className="login">
        {isLogged && !loading && (
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
            <p>Ici faudra router vers le dashboard</p>
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
        {loading && (
          <p>Loading</p>
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
  loading: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Logged véri ouèl',
  loading: false,
};

export default Login;
