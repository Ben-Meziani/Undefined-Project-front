import { connect } from 'react-redux';

import DicesThrow from '../../../components/Room/DicesThrow';
import { displayResult } from '../../../actions';

const mapStateToProps = (state) => ({
 /*  values: state.dices.value, */
  diceOpen: state.room.diceOpen,
});

const mapDispatchToProps = (dispatch) => ({
  /* displayResult: () => {
    console.log('je veux envoyer un message');
    const action = displayResult();
    dispatch(action);
  }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesThrow);
