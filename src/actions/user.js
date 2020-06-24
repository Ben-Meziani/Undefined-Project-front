export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SEND_AVATAR = 'SEND_AVATAR';
export const GET_AVATAR = 'GET_AVATAR';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CONNECT = 'CONNECT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK = 'CHECK';

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

export const sendAvatar = () => ({
  type: SEND_AVATAR,
});

export const getAvatar = () => ({
  type: GET_AVATAR,
});

export const connect = () => ({
  type: CONNECT,
});

export const check = () => ({
  type: CHECK,
});

export const saveUser = (currentUser) => ({
  type: SAVE_USER,
  currentUser,
});
