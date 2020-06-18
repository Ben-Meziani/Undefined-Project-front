import { connect } from 'react-redux';
import RegisterForm from 'src/components/Register/RegisterForm';
import { changeValue } from 'src/actions/user';


const mapStateToProps = (state) => ({
  email: state.registration.email,
  password: state.registration.password,
  username: state.registration.username,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleLRegister: () => {
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
