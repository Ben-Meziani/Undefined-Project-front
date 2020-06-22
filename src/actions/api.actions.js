// Actions Types
export const FINISH_LOADING = 'FINISH_LOADING';

// used to check if the user is connected (without the Login form)
export const CHECK_CONNEXION = 'CHECK_CONNEXION';

// Actions Creators
export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const checkUserIsLogged = () => ({
  type: CHECK_CONNEXION,
});
