export const CHANGE_ICON_FILE = 'CHANGE_ICON_FILE';
export const CHANGE_ICON_URL = 'CHANGE_ICON_URL';
export const CHANGE_FILE_URL = 'CHANGE_FILE_URL';
export const FETCH_ICON = 'FETCH_ICON';
export const SAVE_ICON = 'SAVE_ICON';
export const ADD_FILE = 'ADD_FILE';
export const SEND_IMAGE = 'SEND_IMAGE';

export const changeIconFile = (iconFile) => ({
  type: CHANGE_ICON_FILE,
  iconFile,
});

export const changeIconUrl = (imgURL) => ({
  type: CHANGE_ICON_URL,
  imgURL,
});

export const changeFileUrl = (fileURL) => ({
  type: CHANGE_FILE_URL,
  fileURL,
});

export const addFile = (fileURL) => ({
  type: ADD_FILE,
  fileURL,
});

export const sendImage = () => ({
  type: SEND_IMAGE,
});

export const fetchIcon = () => ({
  type: FETCH_ICON,
});

export const saveIcon = (icon) => ({
  type: SAVE_ICON,
  icon,
});
