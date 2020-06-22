import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkUserIsLogged } from 'src/actions';

const mapStateToProps = (state) => ({
  userLogged: state.connexion.userLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserLogged: () => {
    dispatch(checkUserIsLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
