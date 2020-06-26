export const SEND_EDITED_DATAS = 'SEND_EDITED_DATAS';
export const CHANGE_ICON_FILE = 'CHANGE_ICON_FILE';
export const CHANGE_ICON_URL = 'CHANGE_ICON_URL';

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
