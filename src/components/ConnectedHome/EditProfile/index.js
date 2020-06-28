/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from '../../HomePage/Forms/Field';

import './style.scss';

/* import avatarImg from '../../../assets/avatarDefault.png'; */

const EditProfile = ({
  changeIconFile,
  changeIconUrl,
  email,
  password,
  pseudo,
  icon,
  iconFile,
  imgURL,
  changeValue,
  sendEditedDatas,
  fetchIcon,
}) => {
  useEffect(fetchIcon, []);
  // PREVIEW THE NEW AVATAR
  const handleChange = (evt) => {
    console.log('---- je récupère le nom du fichier sélectionné par le user ----');
    evt.preventDefault();
  /*   console.log('File récupéré au onChange ' + evt.target.files[0]);
    const newIconUrl = URL.createObjectURL(evt.target.files[0]);
    const newIconFile = evt.target.files[0];
    changeIconUrl('+++ NewIconUrl vaut' + newIconUrl);
    console.log('+++ NewIconFile vaut' + newIconFile); */
  };

  // SEND THE NEW DATA
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('---- je veux envoyer les nouvelles infos du profil au serveur email : ' + email + ' pseudo : ' + pseudo + ' file : ' + iconFile);
    sendEditedDatas();
  };
  console.log(icon);
  return (
    <div className="edit-profile-section">
      <div className="edit-profile-section-title">
        <p>Modifier vos informations</p>
      </div>
      <div className="edit-profile-avatar">
        <input type="file" name="iconFile" className="avatar-choice-input" onChange={handleChange} />
        <div className="avatar-preview">
          {!imgURL ? <img className="avatar" src={icon} accept="image/png, image/jpeg" alt="unknown" /> : <img className="avatar" src={imgURL} alt="unknown" />}
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
  iconFile: PropTypes.object.isRequired,
  imgURL: PropTypes.string.isRequired,
  password: PropTypes.string,
  changeIconFile: PropTypes.func.isRequired,
  changeIconUrl: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  sendEditedDatas: PropTypes.func.isRequired,
  fetchIcon: PropTypes.func.isRequired,
};

EditProfile.defaultProps = {
  password: '',
};

export default EditProfile;
