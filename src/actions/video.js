/* eslint-disable import/prefer-default-export */
export const CHANGE_URL = 'CHANGE_URL';

export const changeUrl = (name) => ({
  type: CHANGE_URL,
  name,
});
