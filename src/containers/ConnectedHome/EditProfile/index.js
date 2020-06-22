import { connect } from 'react-redux';

import EditProfile from '../../../components/ConnectedHome/EditProfile';

import { showAvatar } from '../../../actions';

const mapStateToProps = (state) => {
  return ({
  /* id: state.user.users.id,
  email: state.user.users.email,
  password: state.user.users.password,
  pseudo: state.user.users.pseudo,
  avatar: state.user.users.avatar, */
  users: state.user.users,
});
};

const mapDispatchToProps = (dispatch) => ({
  saveAvatar: (selectedFile) => {
    const action = showAvatar(selectedFile);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);