import { connect } from 'react-redux';
import { changeUrl } from '../../actions';

import Video from '../../components/HomePage/Video';

const mapStateToProps = (state) => ({
  asmrPotter: state.videos.asmrPotter,
  url: state.videos.url,
});

const mapDispatchToProps = (dispatch) => ({
  changeUrl: (value) => {
    const action = changeUrl(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Video);
