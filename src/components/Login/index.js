import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import Field from 'src/containers/Field';
import './style.scss';

const Login = () => (
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
        <Form>
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
);

export default Login;
