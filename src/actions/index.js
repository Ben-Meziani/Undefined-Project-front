//  Action types

export const CHANGE = 'CHANGE';
export const LOGIN = 'LOGIN';

// Action creators

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
});
