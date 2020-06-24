import { connect } from 'react-redux';

import EditProfile from '../../../components/ConnectedHome/EditProfile';

import { changeFile, changeValue, sendAvatar } from '../../../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  pseudo: state.user.pseudo,
  icon: state.user.icon,
  id: state.user.id,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: (selectedFile) => {
    const action = changeFile(selectedFile);
    dispatch(action);
  },
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  sendAvatar: () => {
    const action = sendAvatar();
    dispatch(action);
  },
 /*  getAvatar: () => {
    const action = getAvatar();
    dispatch(action);
  }, */
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);