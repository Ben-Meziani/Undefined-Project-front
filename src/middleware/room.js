/* eslint-disable no-console */
import axios from 'axios';

import { CREATE_ROOM, saveRoomId } from '../actions';

const serverURI = 'https://undefined-project.tk/api';

const room = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ROOM: {
      console.log('je crée une room');
      const state = store.getState();
      const userId = state.user.id;
      axios.post(`${serverURI}/room/add`, {
        name: state.room.roomName,
        password: state.room.roomPass,
        player_number: state.room.playersNb,
        gameMaster: userId,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
          // récupérer l'id unique de la room
          const saveRoomNumber = saveRoomId(response.data);
          store.dispatch(saveRoomNumber);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default room;
