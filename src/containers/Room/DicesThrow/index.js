import { connect } from 'react-redux';
import DicesThrow from '../../../components/Room/DicesThrow';
// eslint-disable-next-line import/named
import { rollDice, toggleOpenDice } from '../../../actions';

const mapStateToProps = (state) => ({
  dice: state.dices.dice,
  diceOpen: state.room.diceOpen,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => {
    // console.log('Want to fetch a result');
    function randomRoll(sides = 6) {
      return Math.floor(Math.random() * sides) + 1;
    }
    const action = rollDice(randomRoll());
    dispatch(action);
  },
  toggleOpenDice: () => {
    const action = toggleOpenDice();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesThrow);
