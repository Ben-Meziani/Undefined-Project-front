import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const LoginForm = () => (
  <Grid className="center aligned login-form">
    <Form>
      <Form.Field required>
        <label>E-mail</label>
        <input placeholder="Inscrivez l'e-mail utilisé pour votre compte" />
      </Form.Field>
      <Form.Field required>
        <label>Mot de passe</label>
        <input type="password" placeholder="Mot de passe" />
      </Form.Field>
      <Button color="grey" type="submit" className="center aligned">
        Connectez-vous !
      </Button>
    </Form>
  </Grid>
);

export default LoginForm;
