import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { getMessage } from 'src/selectors/user';


const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  loggedMessage: getMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
