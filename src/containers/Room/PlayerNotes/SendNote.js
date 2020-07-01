import { connect } from 'react-redux';

import SendNote from '../../../components/Room/PlayerNotes/SendNote';
import { sendNote, changeTextNote } from '../../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.room.textNote,
});

const mapDispatchToProps = (dispatch) => ({
  sendNote: () => {
    const action = sendNote();
    dispatch(action);
  },

  changeTextNote: (value) => {
    const action = changeTextNote(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SendNote);
