export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const CONNECT = 'CONNECT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK = 'CHECK';
export const SEND_USER_DATA = 'SEND_USER_DATA';
export const ERROR_LOG = 'ERROR_LOG';
export const ERROR_REG_PASSWORD = 'ERROR_REG_PASSWORD';
export const ERROR_PASSWORD_CHECK = 'ERROR_PASSWORD_CHECK';
export const SEND_EMAIL = 'SEND_EMAIL';

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

export const errorLog = () => ({
  type: ERROR_LOG,
});

export const errorRegPassword = () => ({
  type: ERROR_REG_PASSWORD,
});

export const errorPasswordCheck = () => ({
  type: ERROR_PASSWORD_CHECK,
});

export const sendEmail = () => ({
  type: SEND_EMAIL,
});
