import { connect } from 'react-redux';

import SharedFiles from '../../../components/Room/SharedFiles';

const mapStateToProps = (state) => ({
  bookOpen: state.room.bookOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedFiles);