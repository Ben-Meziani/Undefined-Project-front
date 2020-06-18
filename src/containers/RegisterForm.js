import { connect } from 'react-redux';
import RegisterForm from 'src/components/Register/RegisterForm';
import { changeValue, register } from 'src/actions/user';


const mapStateToProps = (state) => ({
  email: state.registration.email,
  password: state.registration.password,
  passwordChecked: state.registration.passwordChecked,
  username: state.registration.username,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleRegister: () => {
    dispatch(register());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
