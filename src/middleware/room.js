/* eslint-disable no-console */
import axios from 'axios';
import {
  CREATE_ROOM,
  JOIN_ROOM,
  VIEW_ROOM,
  joinRoom,
  createRoom,
  saveRole,
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
    case VIEW_ROOM: {
      console.log('Requête pour afficher la room demandée');
      const state = store.getState();
      const { roomId } = state.room;
      axios.get(`${serverURI}/room/${roomId}/view`, {
      }, {
        withCredentials: true,
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
