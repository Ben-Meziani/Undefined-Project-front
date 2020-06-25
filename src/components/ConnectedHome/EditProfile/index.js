/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from '../../HomePage/Forms/Field';

import './style.scss';
import { changeIconUrl } from '../../../actions';

/* import avatarImg from '../../../assets/avatarDefault.png'; */

const EditProfile = ({
  changeIconName,
  changeIconFile,
  changeIconUrl,
  email,
  password,
  pseudo,
  icon,
  iconFile,
  imgURL,
  display,
  changeValue,
  sendAvatarToPreview,
  sendEditedDatas,
}) => {
  // GET THE UPLOADED FILE
  const handleChange = (evt) => {
    evt.preventDefault();
    /* changeIconName(evt.target.files[0].name);
    changeIconFile(URL.createObjectURL(evt.target.files[0]));
    console.log(URL.createObjectURL(evt.target.files[0]));
    console.log('//nom du fichier// ' + iconFile); */
    changeIconUrl(URL.createObjectURL(evt.target.files[0]));
  };

  // SEND THE NEW DATA
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je veux envoyer les nouvelles infos du profil au serveur');
    sendEditedDatas();
  };

  return (
    <div className="edit-profile-section">
      <div className="edit-profile-section-title">
        <p>Modifier vos informations</p>
      </div>
      <div className="edit-profile-avatar">
        <input type="file" name="iconFile" className="avatar-choice-input" onChange={handleChange} />
        <div className="avatar-preview">
          <img className="current-avatar" src={`http://ec2-54-234-79-207.compute-1.amazonaws.com/api/uploads/icons/${icon}`} accept="image/png, image/jpeg" alt="unknown" />
          <img className="new-avatar" src={imgURL} alt="unknown" />
        </div>
      </div>
      <div className="edit-profile-form">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="email" className="edit-profile-form-label">Email
              <Field
                className="edit-profile-form-input"
                type="email"
                placeholder="Email"
                name="email"
                changeValue={changeValue}
                value={email}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password" className="edit-profile-form-label">Mot de passe
              <Field
                type="password"
                placeholder="Mot de passe"
                name="password"
                changeValue={changeValue}
                value={password}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password-confirm" className="edit-profile-form-label">Confirmer le mot de passe
              <Field
                className="edit-profile-form-input"
                type="password"
                placeholder="Mot de passe"
                name="password"
                changeValue={changeValue}
                value={password}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="pseudo" className="edit-profile-form-label">Pseudo
              <Field
                className="edit-profile-form-input"
                type="text"
                placeholder="Pseudo"
                name="pseudo"
                changeValue={changeValue}
                value={pseudo}
              />
            </label>
          </Form.Field>
          <Button type="submit">Valider</Button>
        </Form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconFile: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  password: PropTypes.string,
  changeIconName: PropTypes.func.isRequired,
  changeIconFile: PropTypes.func.isRequired,
  changeIconUrl: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  sendEditedDatas: PropTypes.func.isRequired,
  sendAvatarToPreview: PropTypes.func.isRequired,
};

EditProfile.defaultProps = {
  password: '',
};

export default EditProfile;
