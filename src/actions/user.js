export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const FETCH_USERDATAS = 'FETCH_USERDATAS';
export const SAVE_USER = 'SAVE_USER';
export const EDIT_USER = 'EDIT_USER';

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = () => ({
  type: REGISTER,
});

export const fetchUserDatas = () => ({
  type: FETCH_USERDATAS,
});

export const saveUser = (userDatas) => ({
  type: SAVE_USER,
  userDatas,
});

export const editUser = (userDatas) => ({
  type: EDIT_USER,
  userDatas,
});
