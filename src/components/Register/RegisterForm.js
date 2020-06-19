/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import { Button, Form, Grid } from 'semantic-ui-react';


const RegisterForm = ({
  email,
  password,
  pseudo,
  changeField,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
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
              name="pseudo"
              onChange={changeField}
              value={pseudo}
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
          <Button color="grey" type="submit" className="center aligned">
            Enregistrez-vous !
          </Button>
        </Form>
      </Grid>
    </>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
