import { connect } from 'react-redux';

import ToolsMenu from '../../../components/Room/ToolsMenu';
import { } from '../../../actions';

const mapStateToProps = (state) => ({
  bookOpen: state.room.bookOpen,
});
const mapDispatchToProps = () => ({
  toggleOpenBook: () => {
    const action = toggleOpenBook();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolsMenu);