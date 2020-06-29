import { connect } from 'react-redux';

import PlayerNotes from '../../../components/Room/PlayerNotes';
import { toggleOpenEdit } from '../../../actions';

const mapStateToProps = (state) => ({
  editOpen: state.room.editOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenEdit: () => {
    const action = toggleOpenEdit();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNotes);