/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Field from './Field';
import RegisterAvatar from './RegisterAvatar';

const Register = ({
  email,
  password,
  pseudo,
  changeValue,
  register,
  loading,
  userRegistered,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    register();
  };

  return (

    <div className="register">
      {!userRegistered && (
        <>
          <RegisterAvatar />
          <Grid className="center aligned register-form">
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Field required>
                <label>Pseudonyme</label>
                <Field
                  type="text"
                  placeholder="Pseudo"
                  name="pseudo"
                  changeValue={changeValue}
                  value={pseudo}
                />
              </Form.Field>
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
                Enregistrez-vous !
              </Button>
            </Form>
          </Grid>
        </>
      )}
      {loading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {userRegistered && !loading && (
      <>
        <p>Enregistré!</p>
        <Link to="/dashboard">
          Allez sur votre profil.
        </Link>
      </>
      )}
    </div>
  );
};

Register.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userRegistered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default Register;
