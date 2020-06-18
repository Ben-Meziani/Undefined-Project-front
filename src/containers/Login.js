import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { getMessage } from 'src/selectors/user';
import { changeValue, login, logout } from 'src/actions/user';


const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  loggedMessage: getMessage(state),
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
