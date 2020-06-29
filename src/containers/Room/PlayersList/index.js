import { connect } from 'react-redux';

import PlayersList from '../../../components/Room/PlayersList';
import { toggleOpenPlayers } from '../../../actions';

const mapStateToProps = (state) => ({
  playersList: state.room.playersList,
  playersOpen: state.room.playersOpen,
});
const mapDispatchToProps = (dispatch) => ({
  toggleOpenPlayers: () => {
    const action = toggleOpenPlayers();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
