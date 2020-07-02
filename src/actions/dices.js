export const REROLL = 'REROLL';
export const ROLL_DICE = 'ROLL_DICE';
export const SAVE_RESULTS = 'SAVE_RESULTS';

export const reroll = () => ({
  type: REROLL,
});

export const rollDice = (dice) => ({
  type: ROLL_DICE,
  dice,
});

export const saveResults = (dice) => ({
  type: SAVE_RESULTS,
  dice,
});
