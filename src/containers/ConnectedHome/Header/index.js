import { connect } from 'react-redux';

import { toggleOpen } from '../../../actions';

import Header from '../../../components/ConnectedHome/Header';

const mapStateToProps = (state) => ({
  open: state.reducer.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
