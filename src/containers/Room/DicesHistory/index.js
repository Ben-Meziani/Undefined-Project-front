import { connect } from 'react-redux';

import DicesHistory from '../../../components/Room/DicesHistory';

const mapStateToProps = (state) => ({
  diceOpen: state.room.diceOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DicesHistory);