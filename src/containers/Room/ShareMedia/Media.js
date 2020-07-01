import { connect } from 'react-redux';

import Media from '../../../components/Room/ShareMedia/Media';
import { toggleOpenShare, changeFileUrl } from '../../../actions';

const mapStateToProps = (state) => ({
  pictureOpen: state.room.pictureOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenShare: () => {
    const action = toggleOpenShare();
    dispatch(action);
  },
  changeFileUrl: (fileURL) => {
    const action = changeFileUrl(fileURL);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
