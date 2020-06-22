import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// import components

import './style.scss';

import avatarImg from 'src/assets/avatarDefault.png'

const EditProfile = ({ saveAvatar, fetchUserDatas, users }) => {
  useEffect(fetchUserDatas, []);
  const showAvatar = (evt) => {
    console.log(evt.target.files[0]);
    saveAvatar(evt.target.files);
  };

  return (
    <div className="edit-profile-section">
      <div className="edit-profile-section-title">
        <p>Modifier vos informations</p>
      </div>
      <div className="edit-profile-avatar">
        <div className="avatar-preview">
          <img src={avatarImg} alt="unknown" />
        </div>
        <input type="file" className="avatar-choice-input" onChange={showAvatar} />
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

EditProfile.propTypes = {
    users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      pseudo: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

EditProfile.propTypes = {
 fetchUserDatas: PropTypes.func.isRequired,
};

export default EditProfile;