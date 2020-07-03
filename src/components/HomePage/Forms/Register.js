/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Field from './Field';
import RegisterAvatar from './RegisterAvatar';
import { errorRegPassword } from '../../../actions';

const Register = ({
  regEmail,
  regPassword,
  regPseudo,
  regPasswordCheck,
  errorRegPass,
  changeValue,
  register,
  loading,
  userRegistered,
  logged,
  errorPasswordCheck,
  errorPassCheck,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    /* register();  */
    if (regPassword === regPasswordCheck) {
      register();
    }
    else {
      errorPasswordCheck();
    }
  };

  console.log(logged);

  return (

    <div className="register">
   {/*    {!userRegistered && !logged && ( */}
        <>
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
              {errorRegPass && !loading && (
                <p className="register-password-int"> Votre mot de passe doit contenir au moins un chiffre.</p>
              )}
            </Form.Field>
            <Form.Field required>
              <label>Entrez à nouveau votre mot de passe</label>
              <Field
                type="password"
                placeholder="Mot de passe"
                name="regPasswordCheck"
                changeValue={changeValue}
                value={regPasswordCheck}
              />
              {errorPassCheck && !loading && (
                <p className="register-password-int"> Vos mots de passe doivent être identiques!</p>
              )}
            </Form.Field>
            <Button color="black" type="submit">
              Enregistrez-vous !
            </Button>
          </Form>
        </>
     {/*  )} */}
      {loading && (
      <div className="register-loader">
        <Loader active inline="centered" />
      </div>
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

  regPasswordCheck: PropTypes.string.isRequired,
  errorRegPass: PropTypes.bool.isRequired,
  errorPasswordCheck: PropTypes.func.isRequired,
  errorPassCheck: PropTypes.bool.isRequired,

  changeValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userRegistered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default Register;
