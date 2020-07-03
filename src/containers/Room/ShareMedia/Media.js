import { connect } from 'react-redux';

import Media from '../../../components/Room/ShareMedia/Media';
import { toggleOpenShare } from '../../../actions';

const mapStateToProps = (state) => ({
  pictureOpen: state.room.pictureOpen,
  fileURL: state.upload.fileURL,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenShare: () => {
    const action = toggleOpenShare();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
