import { connect } from 'react-redux';

import ConnectedHome from '../../components/ConnectedHome';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.user.loading,
  id: state.user.id,
  idForJoin: state.user.idForJoin,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedHome);
