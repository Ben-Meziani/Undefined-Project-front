import { connect } from 'react-redux';

import { fetchUserDatas } from 'src/actions/user';
import App from 'src/components/App';

const mapStateToProps = (state) => ({});

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