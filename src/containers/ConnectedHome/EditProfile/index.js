import { connect } from 'react-redux';

// Import components
import EditProfile from '../../../components/ConnectedHome/EditProfile';

// import actions
import {
  changeIconFile,
  changeIconUrl,
  changeValue,
  sendEditedDatas,
  fetchIcon,
} from '../../../actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  icon: state.user.icon,
  id: state.user.id,
  iconFile: state.upload.iconFile,
  imgURL: state.upload.imgURL,
});

const mapDispatchToProps = (dispatch) => ({
  changeIconFile: (iconFile) => {
    const action = changeIconFile(iconFile);
    dispatch(action);
  },
  changeIconUrl: (imgURL) => {
    const action = changeIconUrl(imgURL);
    dispatch(action);
  },
  changeValue: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  sendEditedDatas: () => {
    const action = sendEditedDatas();
    dispatch(action);
  },
  fetchIcon: () => {
    const action = fetchIcon();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
