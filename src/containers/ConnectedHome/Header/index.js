import { connect } from 'react-redux';

// import actions
import { toggleOpen, logout } from '../../../actions';

// import components
import Header from '../../../components/ConnectedHome/Header';

const mapStateToProps = (state) => ({
  open: state.reducer.open,
  logged: state.reducer.logged,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
