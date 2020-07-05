import { connect } from 'react-redux';

import Room from '../../components/ConnectedHome';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  loading: state.user.loading,
  id: state.user.id,
  roomId: state.room.roomId,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);