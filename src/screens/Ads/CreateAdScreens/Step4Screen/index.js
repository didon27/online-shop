import Step4Screen from './Step4Screen';

import { connect } from 'react-redux';

import { adCreateActions } from '../../../../redux/AdCreate';

const mapStateToProps = state => {
  return {
    full_name: state.adCreate.ad.full_name,
    city: state.adCreate.ad.city,
    email: state.adCreate.ad.email,
    phone_number: state.adCreate.ad.phone_number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(adCreateActions.setReducerValue(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step4Screen);
