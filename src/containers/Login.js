import { connect } from 'react-redux';
import Login from 'src/components/HomePage/Forms/Login';
import { changeValue, login } from 'src/actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  userLogged: state.user.userLogged,
  responseLoading: state.user.responseLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  login: () => {
    const action = login();
    dispatch(action);
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
