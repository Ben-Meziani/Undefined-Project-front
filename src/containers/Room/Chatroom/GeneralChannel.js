import { connect } from 'react-redux';

import GeneralChannel from '../../../components/Room/Chatroom/GeneralChannel';

const mapStateToProps = (state) => ({
  chatMessages: state.room.chatMessages,
});

const mapDispatchToProps = (dispatch) => ({
  // uneAutreProp: () => {
  //   console.log('uneFonction pour dispatcher une action'),
  //  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralChannel);
