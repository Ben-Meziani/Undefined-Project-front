import { connect } from 'react-redux';

import ToolsMenu from '../../../components/Room/ToolsMenu';
import {
  toggleOpenBook,
  toggleOpenEdit,
  toggleOpenBomb,
  toggleOpenDice,
  toggleOpenChat,
} from '../../../actions';

const mapStateToProps = (state) => ({
  bookOpen: state.room.bookOpen,
  editOpen: state.room.editOpen,
  bombOpen: state.room.bombOpen,
  diceOpen: state.room.diceOpen,
  pictureOpen: state.room.pictureOpen,
  masterRole: state.user.masterRole,
  chatOpen: state.room.chatOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenBook: () => {
    const action = toggleOpenBook();
    dispatch(action);
  },
  toggleOpenEdit: () => {
    const action = toggleOpenEdit();
    dispatch(action);
  },
  toggleOpenBomb: () => {
    const action = toggleOpenBomb();
    dispatch(action);
  },
  toggleOpenDice: () => {
    const action = toggleOpenDice();
    dispatch(action);
  },
  toggleOpenChat: () => {
    const action = toggleOpenChat();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolsMenu);
