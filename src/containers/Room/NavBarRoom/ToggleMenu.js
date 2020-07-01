import { connect } from 'react-redux';

import ToggleMenu from '../../../components/Room/NavBarRoom/ToggleMenu';
import { logout, toggleOpenMenu, toggleOpenShare } from '../../../actions';

const mapStateToProps = (state) => ({
  active: state.room.active,
});
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  toggleOpenShare: () => {
    const action = toggleOpenShare();
    dispatch(action);
  },
  toggleOpenMenu: () => {
    const action = toggleOpenMenu();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenu);
