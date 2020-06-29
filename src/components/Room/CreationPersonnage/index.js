import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Field from '../Room/Forms/Field';

const CreationPersonnage = ({
  nom,
  maison,
  age,
  statut,
  animal,
  changeValue,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je veux envoyer les nouvelles infos du profil au serveur');
    sendEditedDatas();
  };

  return (
    <div className="creation-personnage">
      <div className="creation-personnage-title">
        <h1>Création de ta fiche de personnage !</h1>
      </div>
      <div className="creation-personnage-form">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="nom" className="creation-personnage-form-label">Nom Prénom de ton personnage
              <Field
                className="creation-personnage-form-input"
                type="text"
                placeholder="nom"
                name="nom"
                changeValue={changeValue}
                value={nom}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label control="select" className="creation-personnage-form-label">Maison du personnage ?
              <Field
                type="text"
                placeholder="maison"
                name="maison"
                changeValue={changeValue}
                value={maison}
              />
              <option value="gryffindor">Gryffindor</option>
              <option value="poufsouffle">Poufsouffle</option>
              <option value="serdaigie">Serdaigie</option>
              <option value="serpentard">Serpentard</option>
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="age" className="creation-personnage-form-label">Son âge ?
              <Field
                type="text"
                placeholder="age"
                name="age"
                changeValue={changeValue}
                value={age}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="statut" className="creation-personnage-form-label">Son statut ?
              <Field
                type="text"
                placeholder="statut"
                name="statut"
                changeValue={changeValue}
                value={statut}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="animal" className="creation-personnage-form-label">Son animal de compagnie ?
              <Field
                type="text"
                placeholder="animals"
                name="animal"
                changeValue={changeValue}
                value={animal}
              />
            </label>
          </Form.Field>
          <Button type="submit">Tues prêt? c'est parti !</Button>
        </Form>
      </div>
    </div>
  );
};

CreationPersonnage.propTypes = {
  nom: PropTypes.string.isRequired,
  maison: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  statut: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default CreationPersonnage;
