import { connect } from 'react-redux';

import EditProfile from '../../../components/ConnectedHome/EditProfile';

import { showAvatar } from '../../../actions';

const mapStateToProps = (state) => ({
  userDatas: state.user,
  avatarImg: state.reducer.avatarImg,
});

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