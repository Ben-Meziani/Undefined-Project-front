import { connect } from 'react-redux';

import CreateRoom from '../../../components/ConnectedHome/NavBar/CreateRoom';

import { changeValue, dropdownChange } from '../../../actions';

const mapStateToProps = (state) => ({
  roomName: '',
  playersNb: 0,
  
});

const mapDispatchToProps = (dispatch) => ({
  saveValue: (value) => {
    const action = changeValue(value);
    dispatch(action);
  },
  handleDropdown: (selectedValue) => {
    const action = dropdownChange(selectedValue);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRoom);
