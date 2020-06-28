import { connect } from 'react-redux';

import DicesThrow from '../../../components/Room/Dices/DicesThrow';
import { fetchResult, reroll } from '../../../actions';

const mapStateToProps = (state) => ({
  dice: state.dices.dice,
  throwed: state.dices.throwed,
});

const mapDispatchToProps = (dispatch) => ({
  fetchResult: () => {
    console.log('Want to do axios request');
    const action = fetchResult();
    dispatch(action);
  },
  reroll: () => {
    console.log('Want to reroll : empy dice, ask again for the throw');
    const action = reroll();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesThrow);
