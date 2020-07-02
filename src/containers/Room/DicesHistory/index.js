import { connect } from 'react-redux';

import DicesHistory from '../../../components/Room/DicesHistory';
import { toggleOpenDice } from '../../../actions';

const mapStateToProps = (state) => ({
  diceOpen: state.room.diceOpen,
  dice: state.dices.dice,
  dicesResults: state.dices.dicesResults,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenDice: () => {
    const action = toggleOpenDice();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesHistory);
