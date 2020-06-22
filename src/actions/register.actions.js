// Actions Types
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTERED = 'REGISTERED';
// Checking if the response failed
// TODO

// Actions Creators
export const requestRegistration = () => ({
  type: REGISTER_REQUEST,
});

export const registeredUser = () => ({
  type: REGISTERED,
});
