import { StyleSheet, Platform } from 'react-native';

import { globalStyles } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'ios' ? 0 : 10,
  },
  title: {
    ...globalStyles.gothamBold,
    color: 'white',
    fontSize: 17,
    marginTop: 10,
  },
  leftIcon: {
    width: 100,
    alignItems: 'flex-start',
  },
  rightIcon: {
    width: 100,
    alignItems: 'flex-end',
  },
});
