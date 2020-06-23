export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const EDIT_USER = 'EDIT_USER';
export const SHOW_AVATAR = 'SHOW_AVATAR';
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

export const showAvatar = (selectedFile) => ({
  type: SHOW_AVATAR,
  selectedFile,
});

export const connect = () => ({
  type: CONNECT,
});
