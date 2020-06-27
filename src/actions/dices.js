export const THROW_DICES = 'THROW_DICE';
export const DISPLAY_RESULT = 'DISPLAY_RESULT';

export const throwDices = () => ({
  type: THROW_DICES,
});

export const displayResult = (values) => ({
  type: DISPLAY_RESULT,
  values,
});
