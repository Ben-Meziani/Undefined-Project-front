import {
  CHANGE_ICON_FILE,
  CHANGE_ICON_URL,
  CHANGE_FILE_URL,
  ADD_FILE,
  SAVE_ICON,
} from '../actions';

const initialState = {
  icon: '',
  iconFile: {
  },
  imgURL: '',
  files: [
    {
      blob: {},
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
      console.log('reducer ADD_FILES', action.fileURL);
      const newFiles = [
        ...state.files,
      ];
      const newFile = {
        ...action.fileURL,
      };
      newFiles.push(newFile);
      console.log(newFiles);

      console.log('reducer ADD_FILE', action.fileURL);
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
