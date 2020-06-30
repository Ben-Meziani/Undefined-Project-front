import { connect } from 'react-redux';

import SharedView from '../../../components/Room/SharedView';

const mapStateToProps = (state) => ({
  masterRole: state.user.masterRole,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SharedView);
