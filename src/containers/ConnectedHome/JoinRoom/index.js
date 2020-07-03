import { connect } from 'react-redux';

import JoinRoom from '../../../components/ConnectedHome/NavBar/JoinRoom';

import {
  changeValue,
  joinRoom,
} from '../../../actions';

const mapStateToProps = (state) => ({
  idForJoin: state.room.idForJoin,
  passForJoin: state.room.passForJoin,
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
