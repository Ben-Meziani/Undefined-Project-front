import { connect } from 'react-redux';

import DicesThrow from '../../../components/Room/Dices/DicesThrow';
import { fetchResult } from '../../../actions';

const mapStateToProps = (state) => ({
  dice: state.dices.dice,
});

/* const mapDispatchToProps = (dispatch) => ({
  fetchResult: () => {
    console.log('Want to do axios request');
    const action = fetchResult();
    dispatch(action);
  },
}); */

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DicesThrow);
