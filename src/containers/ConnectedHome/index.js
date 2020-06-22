import { connect } from 'react-redux';

import ConnectedHome from 'src/components/ConnectedHome';

import { fetchUserDatas } from 'src/actions/user';

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedHome);
