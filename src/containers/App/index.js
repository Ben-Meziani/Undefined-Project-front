import { connect } from 'react-redux';

import { fetchUserDatas } from 'src/actions';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  userLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);