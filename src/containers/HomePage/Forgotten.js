import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import Forgotten from '../../components/HomePage/Forms/Forgotten';
import { changeValue, sendEmail } from '../../actions';

const mapStateToProps = (state) => ({
  sendedEmail: state.user.sendedEmail,
  logged: state.user.logged,
  loading: state.user.loading,
  send: state.user.send,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotten);
