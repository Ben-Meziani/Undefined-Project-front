// Actions Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const CONNECT = 'CONNECT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

// Actions Creators
export const requestConnexion = () => ({
  type: LOGIN_REQUEST,
});

export const connectUser = () => ({
  type: CONNECT,
});

export const authSuccess = (token, user) => ({
  type: AUTH_SUCCESS,
  token,
  user,
});
