import {
  CHANGE_URL,
} from '../actions';

const initialState = {

  asmrPotter: [
    {
      author: 'Hogwart Library',
      value: '"https://www.youtube.com/watch?v=pAHciSqi1-8"',
      id: 1,
    },
    {
      author: 'Charms ClassRoom',
      value: 'https://www.youtube.com/watch?v=8Te8ndpLzz0',
      id: 2,
    },
  ],

  url: '',
};

const videos = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_URL:
      return {
        ...state,
        url: action.name,
      };
    default:
      return state;
  }
};

export default videos;
