export const SEND_EDITED_DATAS = 'SEND_EDITED_DATAS';
export const CHANGE_ICON_FILE = 'CHANGE_ICON_FILE';
export const CHANGE_ICON_URL = 'CHANGE_ICON_URL';
export const FETCH_ICON = 'FETCH_ICON';
export const SAVE_ICON = 'SAVE_ICON';

export const changeIconFile = (iconFile) => ({
  type: CHANGE_ICON_FILE,
  iconFile,
});

export const changeIconUrl = (imgURL) => ({
  type: CHANGE_ICON_URL,
  imgURL,
});

export const sendEditedDatas = () => ({
  type: SEND_EDITED_DATAS,
});

export const fetchIcon = () => ({
  type: FETCH_ICON,
});

export const saveIcon = (icon) => ({
  type: SAVE_ICON,
  icon,
});
