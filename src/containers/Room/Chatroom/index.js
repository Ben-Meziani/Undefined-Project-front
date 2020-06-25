import { connect } from 'react-redux';

import Chatroom from '../../../components/Room/Chatroom';
import { wsConnect } from '../../../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    dispatch(wsConnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
