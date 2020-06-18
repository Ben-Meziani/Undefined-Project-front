export const initialState = {
  email: '',
  password: '',
  username: '',
  logged: false,
  loading: false,
  submitted: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
