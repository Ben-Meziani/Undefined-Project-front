import { connect } from 'react-redux';

import PlayersMenu from '../../../components/Room/NavBarRoom/PlayersMenu';
import { toggleOpenPlayers } from '../../../actions';

const mapStateToProps = (state) => ({
  playersOpen: state.room.playersOpen,
});
const mapDispatchToProps = (dispatch) => ({
  toggleOpenPlayers: () => {
    const action = toggleOpenPlayers();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);
