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
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login();
    // console.log(errorToLog);
  };
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
      {/* {logged && !loading ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
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
};

Login.defaultProps = {
  loading: false,
};

export default Login;
