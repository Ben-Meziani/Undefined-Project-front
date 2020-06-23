import { connect } from 'react-redux';
import Register from '../components/HomePage/Forms/Register';
import { changeValue, register } from '../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  loading: state.user.loading,
  userRegistered: state.user.userRegistered,

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
