import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import Forgotten from '../../components/HomePage/Forms/Forgotten';
import { changeValue, sendEmail, errorRegPassword } from '../../actions';

const mapStateToProps = (state) => ({
  sendedEmail: state.user.sendedEmail,
  logged: state.user.logged,
  loading: state.user.loading,
  send: state.user.send,
  errorRegPass: state.user.errorRegPass,
  userRegistered: state.user.userRegistered,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  sendEmail: () => {
    const action = sendEmail();
    dispatch(action);
  },
  errorRegPassword: () => {
    const action = errorRegPassword();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotten);
