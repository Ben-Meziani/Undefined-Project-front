import {
  CHANGE_ICON_NAME,
  CHANGE_ICON_FILE,
  SEND_AVATAR_TO_PREVIEW,
  SEND_EDITED_DATAS,
} from '../actions';

import { modifyFiles } from '../selectors';

const initialState = {
  icon: '',
  iconFile: {

  },
};

const upload = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ICON_NAME:
      return {
        ...state,
        icon: action.iconFileName,
      };
    case CHANGE_ICON_FILE:
      console.log("dans l'action iconFile vaut " + state.iconFile);
      return {
        ...state,
        iconFile: {
          ...state.iconFile,
          ...modifyFiles(state.iconFile, action.iconFile),
        },
      };
    case SEND_EDITED_DATAS:
      return {
        ...state,
      };
    case SEND_AVATAR_TO_PREVIEW:
      return {
        ...state,
        iconFile: action.iconFile,
      };
    default:
      return state;
  }
};

export default upload;
