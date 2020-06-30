import { connect } from 'react-redux';

import Video from '../../components/HomePage/Video';

const mapStateToProps = (state) => ({
  asmrPotter: state.videos.asmrPotter,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Video);
