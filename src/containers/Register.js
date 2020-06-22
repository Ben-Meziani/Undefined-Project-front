import { connect } from 'react-redux';
import Register from 'src/components/HomePage/Forms/Register';
import { changeValue, register } from 'src/actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  responseLoading: state.user.responseLoading,
  userRegistered: state.user.userRegistered,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  register: () => {
    const action = register();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
