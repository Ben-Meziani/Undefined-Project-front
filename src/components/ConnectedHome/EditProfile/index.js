/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Field from '../../HomePage/Forms/Field';
import homeIcon from '../../../assets/icons/home.svg';

import './style.scss';

const imageUrl = `https://undefined-project.tk/${homeIcon}`;

const EditProfile = ({
  changeIconFile,
  changeIconUrl,
  email,
  pseudo,
  icon,
  imgURL,
  changeValue,
  sendUserData,
  id,
}) => {
  // PREVIEW THE NEW AVATAR AND SEND TO SERVER
  const handleChange = (evt) => {
    console.log('---- je récupère le nom du fichier sélectionné par le user ----');
    evt.preventDefault();
    const newIconUrl = URL.createObjectURL(evt.target.files[0]);
    const newIconFile = evt.target.files[0];
    changeIconUrl(newIconUrl);
    changeIconFile(newIconFile);
  };

  // SEND ALL THE NEW DATA
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendUserData();
  };

  return (
    <div className="edit-profile-section">
      <Link to={`/dashboard/user/${id}`}>
        <div className="home-button">
          <img src={imageUrl} alt="home" />
        </div>
      </Link>
      <div className="edit-profile-section-title">
        <p>Modifier vos informations</p>
      </div>
      <div className="edit-profile-avatar">
        <label htmlFor="iconFile" className="label-file">Choisissez votre nouvel avatar</label>
        <input type="file" id="iconFile" name="iconFile" className="avatar-choice-input" onChange={handleChange} />
        <div className="avatar-preview">
          {!imgURL ? <img className="avatar" src={`https://undefined-project.tk/api/uploads/icons/${icon}`} alt="unknown" /> : <img className="avatar" src={imgURL} alt="unknown" />}
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
  imgURL: PropTypes.string.isRequired,
  changeIconFile: PropTypes.func.isRequired,
  changeIconUrl: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  sendUserData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  roomId: PropTypes.number.isRequired,
};

export default EditProfile;
