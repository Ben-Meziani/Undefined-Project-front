import { WS_CONNECT, SEND_MESSAGE } from '../actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (infos) => {
        console.log('une message a été envoyé', infos);
        console.log('je peux réagir, en modifiant mon state puisque je veux l\'afficher dans mon application');
      });
      break;
    case SEND_MESSAGE:
      console.log('on demande d\'envoyer un message, je traduis comment ça doit se faire dans le middleware');
      socketCanal.emit('send_message', { content:'MORBLEU!', author:'Rusard' });
      break;
    default:
      next(action);
  }
};

export default socket;
