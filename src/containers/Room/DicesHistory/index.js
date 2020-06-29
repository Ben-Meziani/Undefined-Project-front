import { connect } from 'react-redux';

import DicesHistory from '../../../components/Room/DicesHistory';
import { toggleOpenDice } from '../../../actions';

const mapStateToProps = (state) => ({
  diceOpen: state.room.diceOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenDice: () => {
    const action = toggleOpenDice();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesHistory);
