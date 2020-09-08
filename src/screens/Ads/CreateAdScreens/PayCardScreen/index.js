import PayCardScreen from './PayCardScreen';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    token: state.auth.user !== null ? state.auth.user.access_token : null,
  };
};

export default connect(mapStateToProps)(PayCardScreen);
