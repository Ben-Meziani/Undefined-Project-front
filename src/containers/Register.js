import { connect } from 'react-redux';
import Register from 'src/components/HomePage/Forms/Register';
import { changeValue, requestRegistration } from 'src/actions';

const mapStateToProps = (state) => ({
  email: state.register.email,
  password: state.register.password,
  pseudo: state.register.pseudo,
  responseLoading: state.register.responseLoading,
  userRegistered: state.register.userRegistered,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  requestRegistration: () => {
    const action = requestRegistration();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
