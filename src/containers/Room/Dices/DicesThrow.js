import { connect } from 'react-redux';

import DicesThrow from '../../../components/Room/Dices/DicesThrow';
import { displayResult } from '../../../actions';

const mapStateToProps = (state) => ({
  values: state.dices.value,
});

/* const mapDispatchToProps = (dispatch) => ({
  displayResult: () => {
    console.log('je veux envoyer un message');
    const action = displayResult();
    dispatch(action);
  },
}); */

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DicesThrow);
