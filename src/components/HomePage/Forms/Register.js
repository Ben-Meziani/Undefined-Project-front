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
  regEmail,
  regPassword,
  regPseudo,
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
          {/* <Grid className="center aligned register-form"> */}
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Field required>
                <label>Pseudonyme</label>
                <Field
                  type="text"
                  placeholder="Pseudo"
                  name="regPseudo"
                  changeValue={changeValue}
                  value={regPseudo}
                />
              </Form.Field>
              <Form.Field required>
                <label>E-mail</label>
                <Field
                  type="email"
                  placeholder="Email"
                  name="regEmail"
                  changeValue={changeValue}
                  value={regEmail}
                />
              </Form.Field>
              <Form.Field required>
                <label>Mot de passe</label>
                <Field
                  type="password"
                  placeholder="Mot de passe"
                  name="regPassword"
                  changeValue={changeValue}
                  value={regPassword}
                />
              </Form.Field>
              <Button color="black" type="submit">
                Enregistrez-vous !
              </Button>
            </Form>
{/*           </Grid> */}
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
          <p>Allez sur votre profil.</p>
        </Link>
      </>
      )}
    </div>
  );
};

Register.propTypes = {
  regEmail: PropTypes.string.isRequired,

  regPassword: PropTypes.string.isRequired,
  regPseudo: PropTypes.string.isRequired,

  changeValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userRegistered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default Register;
