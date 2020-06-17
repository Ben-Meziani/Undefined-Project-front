import { connect } from 'react-redux';

import Field from 'src/components/Login/Field';

const mapStateToProps = (state, ownProps) => {
//console.log(ownProps.name); // -> soit email, soit password
// pour accéder à une propriété d'un objet on écrit
// object.propertyName
// MAIS on peut aussi écrire
// object['propertyName']
  return ({
    value: state[ownProps.name],
  });
};


const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
