import { connect } from 'react-redux';

import CreateRoom from '../../../components/ConnectedHome/NavBar/CreateRoom';

import { changeValue, dropdownChange, createRoom } from '../../../actions';

const mapStateToProps = (state) => ({
  roomName: state.user.roomName,
  playersNb: state.room.playersNb,
  masterRole: state.user.masterRole,
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
