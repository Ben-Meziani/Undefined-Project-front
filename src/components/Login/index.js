import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from 'semantic-ui-react';
import Field from 'src/containers/Field';
import './style.scss';

const Login = ( login ) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    // axios.post(url[, data[, config]])
    // axios.post('http://localhost:3001/login', {
    //   email: 'bouclierman@herocorp.io',
    //   password: 'jennifer',
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <>
      <div className="login-register">
        <p>Pas encore inscrit ?</p>
        <Button
          animated="fade"
          className="login-register-button"
        >
          <Button.Content visible>Connectez-vous</Button.Content>
          <Button.Content hidden>CURCUBITACE!</Button.Content>
        </Button>
      </div>
      <div className="login">
        <Grid className="center aligned login-form">
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <label>E-mail</label>
              <Field
                type="email"
                placeholder="Email"
                name="email"
              />
            </Form.Field>
            <Form.Field required>
              <label>Mot de passe</label>
              <Field
                type="password"
                placeholder="Mot de passe"
                name="password"
              />
            </Form.Field>
            <Button color="grey" type="submit" className="center aligned">
              Connectez-vous !
            </Button>
          </Form>
        </Grid>
      </div>
    </>
  )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
