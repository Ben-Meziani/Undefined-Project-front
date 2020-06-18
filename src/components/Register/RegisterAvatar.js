import React from 'react';
import { Image, Button, Icon } from 'semantic-ui-react';
import './style.scss';

const RegisterAvatar = () => (

  <div className="register-avatar">
    <Image
      src="https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/33/339497/gris-pc-switch-f52131b4__220_220__0-0-1440-1440.jpg"
      size="small"
      circular
      centered
      className="register-avatar-preview"
    />
    <Button className="register-avatar-button" icon>
      <Icon name="upload" />
    </Button>
  </div>
);

export default RegisterAvatar;
