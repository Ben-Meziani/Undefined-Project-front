import { connect } from 'react-redux';

import SharedView from '../../../components/Room/SharedView';

const mapStateToProps = (state) => ({
  fileURL: state.upload.fileURL,
  image: state.user.image,
  file: state.upload.file,
  roomId: state.room.roomId,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SharedView);
