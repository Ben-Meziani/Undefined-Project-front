import { connect } from 'react-redux';

import Chatroom from '../../../components/Room/Chatroom';
import { wsConnect, toggleOpenChat } from '../../../actions';

const mapStateToProps = (state) => ({
  chatOpen: state.room.chatOpen,
});
const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    dispatch(wsConnect());
  },
  toggleOpenChat: () => {
    const action = toggleOpenChat();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
