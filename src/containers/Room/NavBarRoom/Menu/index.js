import { connect } from 'react-redux';

import Menu from '../../../../components/Room/NavBarRoom/Menu';
import { logout, toggleOpenShare } from '../../../../actions';

const mapStateToProps = (state) => ({
  roomName: state.room.roomName,
  playersOpen: state.room.playersOpen,
});
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    const action = logout();
    dispatch(action);
  },
  toggleOpenShare: () => {
    const action = toggleOpenShare();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
