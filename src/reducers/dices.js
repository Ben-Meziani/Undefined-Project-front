import {
  DISPLAY_RESULT,

} from '../actions';

const initialState = {
  values: [
    {
      success: true,
      dice: [
        {
          value: 4,
          type: 'd6',
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_RESULT: {
      return {
        ...state,
        values: action.values,
      };
    }
    default:
      return state;
  }
};

export default reducer;
