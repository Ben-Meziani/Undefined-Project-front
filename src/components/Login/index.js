import React from 'react';
import { Button } from 'semantic-ui-react';
import LoginForm from './LoginForm';
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
      <LoginForm />
    </div>
  </>
);

export default Login;
