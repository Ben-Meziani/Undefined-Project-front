export const LOGOUT = 'LOGOUT';
export const FETCH_USERDATAS = 'FETCH_USERDATAS';
export const SAVE_USER = 'SAVE_USER';

export const logout = () => ({
  type: LOGOUT,
});

export const fetchUserDatas = () => ({
  type: FETCH_USERDATAS,
});

export const saveUser = () => ({
  type: SAVE_USER,
});
