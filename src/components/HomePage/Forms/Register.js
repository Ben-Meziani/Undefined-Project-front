/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Loader,
} from 'semantic-ui-react';
import Field from './Field';
import RegisterAvatar from './RegisterAvatar';

const Register = ({
  email,
  password,
  pseudo,
  changeField,
  registration,
  responseLoading,
  userRegistered,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    registration();
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
                  propFromActionsOnChange={changeField}
                  value={pseudo}
                />
              </Form.Field>
              <Form.Field required>
                <label>E-mail</label>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  propFromActionsOnChange={changeField}
                  value={email}
                />
              </Form.Field>
              <Form.Field required>
                <label>Mot de passe</label>
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  propFromActionsOnChange={changeField}
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
      {responseLoading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {userRegistered && !responseLoading && (
      <>
        <p>Enregistré!</p>
        <NavLink to="/dashboard">
          Allez sur votre profil.
        </NavLink>
      </>
      )}
    </div>
  );
};

Register.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  responseLoading: PropTypes.bool.isRequired,
  userRegistered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default Register;
