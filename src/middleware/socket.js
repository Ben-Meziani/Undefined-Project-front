import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from '../actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (message) => {
        // console.log('a message has been sent', message);
        store.dispatch(receiveMessage(message));
      });
      break;
    case SEND_MESSAGE: {
      // console.log('ask to send a message, I translate it how to do it in my middleware');
      const state = store.getState();
      // console.log(state);
      socketCanal.emit('send_message', { content: state.room.textMessage, author: state.user.pseudo });
      break; }
    default:
      next(action);
  }
};

export default socket;
