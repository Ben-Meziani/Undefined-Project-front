import { connect } from 'react-redux';

import JoinRoom from '../../../components/ConnectedHome/NavBar/JoinRoom';

import { changeValue, joinRoom } from '../../../actions';

const mapStateToProps = (state) => ({
  roomName: state.room.roomName,
  roomPassword: state.room.roomPassword,
  role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  joinRoom: () => {
    const action = joinRoom();
    dispatch(action);
  },
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinRoom);
