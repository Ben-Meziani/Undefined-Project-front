import { connect } from 'react-redux';
import Login from 'src/components/HomePage/Forms/Login';
import { changeValue, requestConnexion } from 'src/actions';

const mapStateToProps = (state) => ({
  email: state.connexion.email,
  password: state.connexion.password,
  userLogged: state.connexion.userLogged,
  responseLoading: state.connexion.responseLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  requestConnexion: () => {
    const action = requestConnexion();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
