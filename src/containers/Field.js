import { connect } from 'react-redux';
import { change } from 'src/actions';
import Field from 'src/components/Login/Field';

const mapStateToProps = (state, ownProps) => {
//  console.log(ownProps.name);
  return ({
    value: state[ownProps.name],
  });
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    console.log('changer la valeur du champ');
    const action = change(ownProps.name, newValue);
    console.log(action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
