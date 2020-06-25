export const SEND_EDITED_DATAS = 'SEND_EDITED_DATAS';
export const SEND_AVATAR_TO_PREVIEW = 'SEND_AVATAR_TO_PREVIEW';
export const CHANGE_ICON_NAME = 'CHANGE_ICON_NAME';
export const CHANGE_ICON_FILE = 'CHANGE_ICON_FILE';

export const changeIconName = (iconFileName) => ({
  type: CHANGE_ICON_NAME,
  iconFileName,
});

export const changeIconFile = (iconFile) => ({
  type: CHANGE_ICON_NAME,
  iconFile,
});

export const sendEditedDatas = () => ({
  type: SEND_EDITED_DATAS,
});

export const sendAvatarToPreview = (iconFile) => ({
  type: SEND_AVATAR_TO_PREVIEW,
  iconFile,
});