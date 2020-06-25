import { connect } from 'react-redux';

import MessageField from '../../../components/Room/Chatroom/MessageField';


import { sendMessage, changeText } from '../../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.room.text,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    // console.log('send Message');
    dispatch(sendMessage());
  },
  changeText: (value) => {
    const action = changeText(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
