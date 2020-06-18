import { connect } from 'react-redux';
import Register from 'src/components/Register';

const mapStateToProps = (state) => ({
  submitted: state.registration.submitted,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
