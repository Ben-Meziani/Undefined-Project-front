import {
  CHANGE_ICON_FILE,
  CHANGE_ICON_URL,
  CHANGE_FILE_URL,
  ADD_FILE,
  SAVE_ICON,
} from '../actions';

import { getNextId } from '../selectors';

const initialState = {
  icon: '',
  iconFile: {
  },
  imgURL: '',
  fileURL: '',
  files: [
    {
      file: '',
      id: 0,
    },
  ],
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
    case CHANGE_FILE_URL:
      return {
        ...state,
        fileURL: action.fileURL,
      };
    case ADD_FILE: {
      console.log('reducer ADD_FILES', state.fileURL);
      const id = getNextId(state.files);
      const newFiles = [
        ...state.files,
      ];
      const newFile = {
        file: state.fileURL,
        id,
      };
      newFiles.push(newFile);
      console.log('reducer ADD_FILES newFile vaut', newFile);

      return {
        ...state,
        files: newFiles,
      };
    }
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
