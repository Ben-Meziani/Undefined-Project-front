import { connect } from 'react-redux';

import PlayersList from '../../../components/Room/PlayersList';
import { } from '../../../actions';

const mapStateToProps = (state) => ({
  playersList: state.room.playersList,
});
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);