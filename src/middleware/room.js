import axios from 'axios';

import { CREATE_ROOM } from '../actions/room';

const room = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ROOM:
      console.log('je crée une room');
      const state = store.getState();
      axios.post('http://ec2-54-234-79-207.compute-1.amazonaws.com/room/add', {
        name: state.room.roomName,
        player_number: state.room.playersNb,
        theme: 'default',
        game_master: 'test',
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default room;
