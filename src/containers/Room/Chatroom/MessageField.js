import { connect } from 'react-redux';

import MessageField from '../../../components/Room/Chatroom/MessageField';

import { sendMessage, changeTextChat } from '../../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.room.textMessage,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    // console.log('send Message');
    dispatch(sendMessage());
  },
  changeTextChat: (value) => {
    const action = changeTextChat(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
