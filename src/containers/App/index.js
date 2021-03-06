import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  id: state.user.id,
  roomId: state.user.roomId,
  idForJoin: state.room.idForJoin,
  /* logged: state.user.logged, */
});


const mapDispatchToProps = null;


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
