/* eslint-disable no-console */
import axios from 'axios';

import { CREATE_ROOM, JOIN_ROOM, saveRoomId, saveRoomPassword, loading } from '../actions';

const serverURI = 'https://undefined-project.tk/api';

const room = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ROOM: {
      console.log('je crée une room');
      const state = store.getState();
      const userId = state.user.id;
      console.log(userId);
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
          console.log(response.data.uniqueId);
          const saveRoomNumber = saveRoomId(response.data.uniqueId);
          const saveRoomPass = saveRoomPassword(response.data.password);
          store.dispatch(saveRoomNumber);
          store.dispatch(saveRoomPass);
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
    case JOIN_ROOM: {
      console.log('je rejoins une room');
      const state = store.getState();
      const { roomId } = state.room;
      axios.post(`${serverURI}/room/${roomId}/join`, {
        uniqueId: roomId,
        password: state.room.roomPass,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
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
    default:
      next(action);
  }
};

export default room;
