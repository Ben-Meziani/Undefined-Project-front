import React from 'react';
import { Form, Button } from 'semantic-ui-react';

// import components

import './style.scss';

const EditProfile = () => {
  const showAvatar = () => {
    
  }
  return (
    <div className="edit-profile-section">
      <div className="edit-profile-section-title">
        <p>Editer le profil</p>
      </div>
      <div className="edit-profile-avatar">
        <div className="avatar-preview">

        </div>
        <input type="file" className="avatar-choice-input" onChange={showAvatar}/>
      </div>
      <div className="edit-profile-form">
        <Form>
          <Form.Field>
            <label htmlFor="email" className="edit-profile-form-label">Email
              <input className="edit-profile-form-input" placeholder="Votre email" type="email" name="email" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password" className="edit-profile-form-label">Mot de passe
              <input className="edit-profile-form-input" placeholder="Mot de passe" type="password" name="password" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password-confirm" className="edit-profile-form-label">Confirmer le mot de passe
              <input className="edit-profile-form-input" placeholder="Mot de passe" type="password" name="password-confirm" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="pseudo" className="edit-profile-form-label">Pseudo
              <input className="edit-profile-form-input" placeholder="Votre pseudo" name="pseudo" />
            </label>
          </Form.Field>
          <Button type="submit">Valider</Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;