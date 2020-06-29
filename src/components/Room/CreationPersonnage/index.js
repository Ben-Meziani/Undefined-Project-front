import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Field from '../Room/Forms/Field';

const CreationPersonnage = ({
  Name,
  Age,
  Animal,
  Maison,
  Statut,
  changeValue,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field label="Nom Prénom de ton personnage" control="input">
        <Field
          type="text"
          placeholder="Nom Prénom de ton personnage"
          name="Name"
          changeValue={changeValue}
          value={Name}
        />
      </Form.Field>
      <Form.Field label="Choisi la maison de ton personnage" control="select">
        <option value="griffondor">Griffondor</option>
        <option value="poufsouffle">Poufsouffle</option>
        <Field
          type="option"
          placeholder="Choisi la maison de ton persnnage"
          name="Maison"
          changeValue={changeValue}
          value={Maison}
        />
      </Form.Field>
      <Form.Field label="L'âge de ton personnage ?" control="input">
        <Field
          type="text"
          placeholder="L'âge de ton personnage ?"
          name="Age"
          changeValue={changeValue}
          value={Age}
        />
      </Form.Field>
      <Form.Field label="Le statut de ton personnage ?" control="input">
        <Field
          type="text"
          placeholder="Le statut de ton personnage ?"
          name="Statut"
          changeValue={changeValue}
          value={Statut}
        />
      </Form.Field>
      <Form.Field label="L'animal de compagnie de ton personnage ?" control="input">
        <Field
          type="text"
          placeholder="L'animal de compagnie de ton personnge ?"
          name="Animal"
          changeValue={changeValue}
          value={Animal}
        />
      </Form.Field>
      <Button color="black" type="submit" className="center aligned">
        Tu es prêt ? C'est parti !
      </Button>
    </Form>
  );
};
CreationPersonnage.propTypes = {
  Name: PropTypes.string.isRequired,
  Age: PropTypes.string.isRequired,
  Maison: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  Animal: PropTypes.string.isRequired,
  Statut: PropTypes.string.isRequired,
};

export default CreationPersonnage;
