import { connect } from 'react-redux';

import ConnectedHome from '../../components/ConnectedHome';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.user.loading,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedHome);