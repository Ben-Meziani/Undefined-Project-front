import { connect } from 'react-redux';

import HomePage from '../../components/HomePage';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
