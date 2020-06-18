/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import { Button, Form, Grid } from 'semantic-ui-react';


const RegisterForm = ({
  email,
  password,
  username,
  changeField,
  submitted,

  // handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // handleRegister();
  };

  return (
    <>
      <Grid className="center aligned login-form">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Pseudonyme</label>
            <Field
              type="text"
              placeholder="Pseudo"
              name="username"
              onChange={changeField}
              value={username}
            />
          </Form.Field>
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
          <Form.Field required>
            <label>Confirmez votre mot de passe</label>
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
      {submitted && (
        <p>Vous êtes enregistré</p>
      )}
    </>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  // handleRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
