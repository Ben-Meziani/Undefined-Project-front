import { connect } from 'react-redux';
import RegisterForm from 'src/components/Register/RegisterForm';
import { changeValue, register } from 'src/actions/user';


const mapStateToProps = (state) => ({
  email: state.registration.email,
  password: state.registration.password,
  pseudo: state.registration.pseudo,
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
