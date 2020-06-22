// Actions Types
export const CHANGE_VALUE = 'CHANGE_VALUE';

//  Actions Creators
export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});
