export * from './field.actions';
export * from './register.actions';
export * from './connexion.actions';
export * from './api.actions';

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const DROPDOWN_CHANGE = 'DROPDOWN_CHANGE';
export const CREATE_ROOM = 'CREATE_ROOM';
export const SHOW_AVATAR = 'SHOW_AVATAR';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const dropdownChange = (selectedValue) => ({
  type: DROPDOWN_CHANGE,
  selectedValue,
});

export const createRoom = () => ({
  type: CREATE_ROOM,
});

export const showAvatar = (selectedFile) => ({
  type: SHOW_AVATAR,
  selectedFile,
});
