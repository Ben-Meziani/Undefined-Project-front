import { connect } from 'react-redux';

import Form from '../../../components/Room/Chatroom/MessageField';

const mapStateToProps = (state) => ({
  // uneProp: state.truc,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    console.log('send Message');
    // dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
