import { connect } from 'react-redux';
import { check } from 'src/actions';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  /* logged: state.user.logged, */
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
