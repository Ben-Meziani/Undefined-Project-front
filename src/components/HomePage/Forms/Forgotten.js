/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Loader,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Field from './Field';
import './style.scss';
import { errorRegPassword } from '../../../actions';

const Forgotten = ({
  sendedEmail,
  changeValue,
  loading,
  send,
  sendEmail,
  errorRegPass,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(sendedEmail);
    sendEmail();
  };

  return (

    <div className="forgotten">

      {!loading && !send && (
        <Grid className="center aligned">
          <p className="forgotten-text">Indiquez l'email utilisé lors de la création de compte, un mot de passe vous sera renvoyé.</p>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Field required>
              <label>E-mail</label>
              <Field
                type="email"
                placeholder="Email"
                name="sendedEmail"
                changeValue={changeValue}
                value={sendedEmail}
              />
            </Form.Field>
            <Button color="black" type="submit">
              Récupérer le mot de passe
            </Button>
          </Form>
        </Grid>
      )}

      {!loading && send && errorRegPass && (
        <Grid className="center aligned">
          <p className="forgotten-text">Indiquez l'email utilisé lors de la création de compte, un mot de passe vous sera renvoyé.</p>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Field required>
              <label>E-mail</label>
              <Field
                type="email"
                placeholder="Email"
                name="sendedEmail"
                changeValue={changeValue}
                value={sendedEmail}
              />
              <p className="register-password-int"> Cet utilisateur ne semble pas être enregistré.</p>
            </Form.Field>
            <Button color="black" type="submit">
              Récupérer le mot de passe
            </Button>
          </Form>
        </Grid>
      )}

      {loading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {!loading && send && !errorRegPass && (
        <p className="forgotten-confirm">Un email vous a été envoyé !</p>
      )}
    </div>
  );
};

Forgotten.propTypes = {
  sendedEmail: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  send: PropTypes.bool.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

Forgotten.defaultProps = {
  loading: false,
};

export default Forgotten;
