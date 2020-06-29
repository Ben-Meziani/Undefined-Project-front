import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import Forgotten from '../../components/HomePage/Forms/Forgotten';
import { changeValue } from '../../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  logged: state.user.logged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotten);
