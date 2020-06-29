import { connect } from 'react-redux';

import PlayerNotes from '../../../components/Room/PlayerNotes';

const mapStateToProps = (state) => ({
  editOpen: state.room.editOpen,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNotes);