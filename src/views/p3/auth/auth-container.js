import { connect } from 'react-redux';
import Authenticated from './authenticated-comp';

const mapStateToProps = (state) => {
  const {
    braveState: { isUnlocked, completedOfSetup },
  } = state;

  return {
    isUnlocked,
    completedOfSetup,
  };
};

export default connect(mapStateToProps)(Authenticated);
