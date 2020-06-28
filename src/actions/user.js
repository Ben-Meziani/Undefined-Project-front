export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const CONNECT = 'CONNECT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK = 'CHECK';
export const SEND_USER_DATA = 'SEND_USER_DATA';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = () => ({
  type: REGISTER,
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

export const sendUserData = () => ({
  type: SEND_USER_DATA,
});
