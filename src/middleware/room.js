/* eslint-disable no-console */
import axios from 'axios';
import {
  CREATE_ROOM,
  JOIN_ROOM,
  joinRoom,
  createRoom,
  saveRoom,
  loading,
  errorJoinRoom,
} from '../actions';

const serverURI = 'https://undefined-project.tk/api';

const room = (store) => (next) => (action) => {
  switch (action.type) {
    // CREATE A ROOM
    case CREATE_ROOM: {
      console.log('Requête de création de room lancée');
      const state = store.getState();
      const userId = state.user.id;
      axios.post(`${serverURI}/room/add`, {
        name: state.room.roomName,
        password: state.room.roomPassword,
        player_number: state.room.playersNb,
        gameMaster: userId,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
          const saveRoomNumber = saveRoom(response.data.uniqueId);
          store.dispatch(saveRoomNumber);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // loading is done
          store.dispatch(loading());
        });
      next(action);
      break;
    }
    // JOIN A ROOM
    case JOIN_ROOM: {
      console.log('Requête pour rejoindre une room lancée');
      const state = store.getState();
      const userId = state.user.id;
      axios.post(`${serverURI}/room/${userId}/join`, {
        uniqueId: state.room.idForJoin,
        password: state.room.passForJoin,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);

          if (error.status !== 200) {
            store.dispatch(errorJoinRoom());
          }
        })
        .finally(() => {
          // loading is done
          store.dispatch(loading());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default room;
