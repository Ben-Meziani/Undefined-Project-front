export * from './room';
export * from './user';

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const DROPDOWN_CHANGE = 'DROPDOWN_CHANGE';
export const FINISH_LOADING = 'FINISH_LOADING';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const dropdownChange = (selectedValue) => ({
  type: DROPDOWN_CHANGE,
  selectedValue,
});

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

