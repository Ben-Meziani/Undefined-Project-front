import {
  CHANGE_ICON_FILE,
  CHANGE_ICON_URL,
  SEND_EDITED_DATAS,
  SAVE_ICON,
} from '../actions';

const initialState = {
  icon: '',
  iconFile: {
  },
  imgURL: '',
};

const upload = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ICON_FILE:
      return {
        ...state,
        iconFile: action.iconFile,
      };
    case CHANGE_ICON_URL:
      return {
        ...state,
        imgURL: action.imgURL,
      };
    case SEND_EDITED_DATAS:
      return {
        ...state,
      };
    case SAVE_ICON: {
      return {
        ...state,
        icon: action.icon,
      };
    }
    default:
      return state;
  }
};

export default upload;
