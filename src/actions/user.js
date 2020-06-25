export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SEND_EDITED_DATAS = 'SEND_EDITED_DATAS';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CONNECT = 'CONNECT';
export const SAVE_USER = 'SAVE_USER';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = () => ({
  type: REGISTER,
});

export const changeFile = (selectedFile) => ({
  type: CHANGE_FILE,
  selectedFile,
});

export const sendEditedDatas = () => ({
  type: SEND_EDITED_DATAS,
});

export const connect = () => ({
  type: CONNECT,
});

export const saveUser = (currentUser) => ({
  type: SAVE_USER,
  currentUser,
});
