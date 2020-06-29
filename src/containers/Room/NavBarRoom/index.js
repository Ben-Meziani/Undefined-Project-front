import { connect } from 'react-redux';

import NavBarRoom from '../../../components/Room/NavBarRoom';

const mapStateToProps = (state) => ({
  roomName: state.room.roomName,
  playersOpen: state.room.playersOpen,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarRoom);