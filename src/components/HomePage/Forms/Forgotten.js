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
import './style.scss';

const Forgotten = ({
  sendedEmail,
  changeValue,
  loading,
  logged,
  send,
  sendEmail,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(sendedEmail);
    sendEmail();
  };
  return (
    <div className="forgotten">
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
      {loading && (
      <>
        <Loader active inline="centered" />
      </>
      )}
      {/* {logged && !loading ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
{/*       {!loading && send && (
      <>
        <p className="forgotten-confirm">Un email vous a été envoyé !</p>
      </>
      )} */}
    </div>
  );
};

Forgotten.propTypes = {
  sendedEmail: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  send: PropTypes.bool.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

Forgotten.defaultProps = {
  loading: false,
};

export default Forgotten;
