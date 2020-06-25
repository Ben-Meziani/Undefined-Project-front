import { WS_CONNECT } from '../actions';

const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      const socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (infos) => {
        console.log('une message a été envoyé', infos);
      });
      break;
    }
    default:
      next(action);
  }
};

export default socket;
