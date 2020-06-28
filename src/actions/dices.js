export const FETCH_RESULT = 'FETCH_RESULT';
export const REROLL = 'REROLL';

export const fetchResult = (dice) => ({
  type: FETCH_RESULT,
  dice,
});

export const reroll = () => ({
  type: REROLL,
});
