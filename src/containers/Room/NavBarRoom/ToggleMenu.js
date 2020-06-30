import { connect } from 'react-redux';

import ToggleMenu from '../../../components/Room/NavBarRoom/ToggleMenu';
import { logout } from '../../../actions';

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenu);
