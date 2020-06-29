import { connect } from 'react-redux';
import Register from '../../components/HomePage/Forms/Register';
import { changeValue, register } from '../../actions';

const mapStateToProps = (state) => ({

  regEmail: state.user.regEmail,
  regPassword: state.user.regPassword,
  regPseudo: state.user.regPseudo,

  loading: state.user.loading,
  userRegistered: state.user.userRegistered,
  logged: state.user.logged,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
