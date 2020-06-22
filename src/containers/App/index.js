import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchUserDatas } from 'src/actions/user';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  fetchUserDatas: () => {
    const action = fetchUserDatas();
    dispatch(action);
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);