export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const EDIT_USER = 'EDIT_USER';
export const SEND_AVATAR = 'SEND_AVATAR';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CONNECT = 'CONNECT';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = () => ({
  type: REGISTER,
});

export const editUser = (userDatas) => ({
  type: EDIT_USER,
  userDatas,
});

export const changeFile = (selectedFile) => ({
  type: CHANGE_FILE,
  selectedFile,
});

export const sendAvatar = () => ({
  type: SEND_AVATAR,
});

export const connect = () => ({
  type: CONNECT,
});
