import { connect } from 'react-redux';

import EditProfile from '../../../components/ConnectedHome/EditProfile';

import { changeFile, changeValue, sendEditedDatas } from '../../../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  icon: state.user.icon,
  id: state.user.id,
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
  sendEditedDatas: () => {
    const action = sendEditedDatas();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);