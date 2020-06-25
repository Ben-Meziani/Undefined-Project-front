/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from '../../HomePage/Forms/Field';

import './style.scss';

/* import avatarImg from '../../../assets/avatarDefault.png'; */

const EditProfile = ({
  changeIconName,
  changeIconFile,
  email,
  password,
  pseudo,
  icon,
  iconFile,
  changeValue,
  sendAvatarToPreview,
  sendEditedDatas,
}) => {
  // GET THE UPLOADED FILE
  const handleChange = (evt) => {
    changeIconName(evt.target.files[0].name);
    changeIconFile(evt.target.files[0]);
    const reader = new FileReader();
    reader.onloaded = () => changeIconFile.onFileLoaded(reader.result);
    reader.readAsDataURL(evt.target.files[0]);
    console.log('//nom de l\'icon// ' + icon);
    console.log('//nom du fichier// ' + iconFile);
   /*  sendAvatarToPreview(evt.target.files[0]); */
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
        <div className="avatar-preview">
          <img src={`http://ec2-54-234-79-207.compute-1.amazonaws.com/uploads/icons/${icon}`} alt="unknown" />
        </div>
        <input type="file" name="iconFile" className="avatar-choice-input" onChange={handleChange} />
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
  iconFile: PropTypes.object.isRequired,
  password: PropTypes.string,
  changeIconName: PropTypes.func.isRequired,
  changeIconFile: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  sendEditedDatas: PropTypes.func.isRequired,
  sendAvatarToPreview: PropTypes.func.isRequired,
};

EditProfile.defaultProps = {
  password: '',
};

export default EditProfile;
