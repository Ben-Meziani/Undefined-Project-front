import {
  CHANGE_ICON_NAME,
  CHANGE_ICON_FILE,
  CHANGE_ICON_URL,
  SEND_AVATAR_TO_PREVIEW,
  SEND_EDITED_DATAS,
} from '../actions';

const initialState = {
  icon: '',
  iconFile: {
  },
  imgURL: '',
};

const upload = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ICON_NAME:
      return {
        ...state,
        icon: action.iconFileName,
      };
    case CHANGE_ICON_FILE:
      return {
        ...state,
        iconFile: state.upload.iconFile,
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
    case SEND_AVATAR_TO_PREVIEW:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default upload;
