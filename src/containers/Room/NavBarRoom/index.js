import { connect } from 'react-redux';

import NavBarRoom from '../../../components/Room/NavBarRoom';
import { } from '../../../actions';

const mapStateToProps = (state) => ({
  roomName: state.room.roomName,
});
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarRoom);