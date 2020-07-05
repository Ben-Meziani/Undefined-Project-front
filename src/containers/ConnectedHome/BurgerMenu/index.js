import { connect } from 'react-redux';

// import actions
import { toggleMenu, logout } from '../../../actions';

// import components
import BurgerMenu from '../../../components/ConnectedHome/BurgerMenu';

const mapStateToProps = (state) => ({
  isOpen: state.burgerMenu.isOpen,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    const action = toggleMenu();
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerMenu);