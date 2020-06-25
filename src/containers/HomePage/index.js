import { connect } from 'react-redux';

import HomePage from '../../components/HomePage';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);