import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkUserIsLogged } from 'src/actions';
import { fetchUserDatas } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userLogged: state.connexion.userLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserLogged: () => {
    dispatch(checkUserIsLogged());
  },
  fetchUserDatas: () => {
    const action = fetchUserDatas();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
