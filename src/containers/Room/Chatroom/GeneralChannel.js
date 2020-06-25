import { connect } from 'react-redux';

import GeneralChannel from '../../../components/Room/Chatroom/GeneralChannel';

const mapStateToProps = (state) => ({
  chatMessages: state.room.chatMessages,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralChannel);
