//  Action types

export const CHANGE = 'CHANGE';

// Action creators

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});
