import { connect } from 'react-redux';

import SharedFiles from '../../../components/Room/SharedFiles';
import { toggleOpenBook } from '../../../actions';

const mapStateToProps = (state) => ({
  bookOpen: state.room.bookOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenBook: () => {
    const action = toggleOpenBook();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedFiles);