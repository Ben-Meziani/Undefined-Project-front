import { connect } from 'react-redux';

import CreateRoom from '../../../components/ConnectedHome/NavBar/CreateRoom';

import { changeValue, dropdownChange, createRoom } from '../../../actions';

const mapStateToProps = (state) => ({
  roomName: state.room.roomName,
  roomPassword: state.room.roomPassword,
  playersNb: state.room.playersNb,
  role: state.user.role,
  loading: state.room.loading,
  roomId: state.user.roomId,
  createdRoom: state.room.createdRoom,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleDropdown: (selectedValue) => {
    const action = dropdownChange(selectedValue);
    dispatch(action);
  },
  createRoom: () => {
    const action = createRoom();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRoom);
