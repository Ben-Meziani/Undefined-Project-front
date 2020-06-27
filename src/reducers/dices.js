import {
  FETCH_RESULT,

} from '../actions';

const initialState = {

  dice: [
    {
      value: 4,
      type: 'd6',
    },
  ],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RESULT: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
