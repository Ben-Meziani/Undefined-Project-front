/* eslint-disable import/prefer-default-export */
export const getMessage = (state) => {
  return state.user.logged ? 'Salutations, troublion. Selectors user.js road to dashboard.' : 'Téki?';
};
