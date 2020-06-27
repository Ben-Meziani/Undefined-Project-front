import { connect } from 'react-redux';

import ChatButton from '../../../components/Room/ChatButton';
import { toggleOpenChat } from '../../../actions';

const mapStateToProps = (state) => ({
  chatOpen: state.room.chatOpen,
});
const mapDispatchToProps = (dispatch) => ({
  toggleOpenChat: () => {
    const action = toggleOpenChat();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatButton);
