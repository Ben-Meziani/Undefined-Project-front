import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  id: state.user.id,
  /* logged: state.user.logged, */
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
