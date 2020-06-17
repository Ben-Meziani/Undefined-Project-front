import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { login } from 'src/actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    const action = login();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
