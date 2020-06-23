import { connect } from 'react-redux';

import EditProfile from '../../../components/ConnectedHome/EditProfile';

import { changeFile } from '../../../actions';

const mapStateToProps = (state) => ({
  avatarImg: state.user.avatarImg,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: (selectedFile) => {
    const action = changeFile(selectedFile);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);