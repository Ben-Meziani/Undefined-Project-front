import { connect } from 'react-redux';

import CreateRoom from '../../../components/ConnectedHome/NavBar/CreateRoom';

const mapStateToProps = (state) => ({
  createRoom: state.reducer.createRoom,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRoom);
