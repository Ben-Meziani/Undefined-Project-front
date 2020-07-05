import { connect } from 'react-redux';

import JoinRoom from '../../../components/ConnectedHome/NavBar/JoinRoom';

import {
  changeValue,
  joinRoom,
  viewRoom,
  errorJoinRoom,
} from '../../../actions';

const mapStateToProps = (state) => ({
  idForJoin: state.room.idForJoin,
  passForJoin: state.room.passForJoin,
  role: state.user.role,
  roomId: state.user.roomId,
  joinedRoom: state.room.joinedRoom,
  errorJoinedRoom: state.room.errorJoinedRoom,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  joinRoom: () => {
    const action = joinRoom();
    dispatch(action);
  },
  viewRoom: () => {
    const action = viewRoom();
    dispatch(action);
  },
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  errorJoinRoom: () => {
    const action = errorJoinRoom();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinRoom);
