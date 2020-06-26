import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import Login from '../../components/HomePage/Forms/Login';
import { changeValue, login } from '../../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  logged: state.user.logged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  login: () => {
    const action = login();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
