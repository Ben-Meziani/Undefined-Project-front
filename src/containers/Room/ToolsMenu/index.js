import { connect } from 'react-redux';

import ToolsMenu from '../../../components/Room/ToolsMenu';
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolsMenu);