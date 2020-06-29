export const REROLL = 'REROLL';
export const ROLL_DICE = 'ROLL_DICE';

export const reroll = () => ({
  type: REROLL,
});

export const rollDice = (dice) => ({
  type: ROLL_DICE,
  dice,
});
