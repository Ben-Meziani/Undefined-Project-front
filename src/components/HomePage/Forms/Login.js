/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
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
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login();
  };
console.log('dans Login logged' + logged);
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
          </Form.Field>
          <Button color="black" type="submit" className="center aligned">
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
      {logged && !loading ? <Redirect to="/dashboard" /> : <Redirect to="/home/login" />}
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
};

Login.defaultProps = {
  loading: false,
};

export default Login;
