import { connect } from 'react-redux';
import Register from '../../components/HomePage/Forms/Register';
import {
  changeValue,
  register,
  errorRegPassword,
  errorPasswordCheck,
} from '../../actions';

const mapStateToProps = (state) => ({

  regEmail: state.user.regEmail,
  regPassword: state.user.regPassword,
  regPseudo: state.user.regPseudo,
  regPasswordCheck: state.user.regPasswordCheck,
  errorRegPass: state.user.errorRegPass,
  errorPassCheck: state.user.errorPassCheck,

  loading: state.user.loading,
  userRegistered: state.user.userRegistered,
  logged: state.user.logged,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  register: () => {
    const action = register();
    dispatch(action);
  },
  errorRegPassword: () => {
    const action = errorRegPassword();
    dispatch(action);
  },
  errorPasswordCheck: () => {
    const action = errorPasswordCheck();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
