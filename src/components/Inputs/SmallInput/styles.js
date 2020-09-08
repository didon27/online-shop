import { StyleSheet } from 'react-native';

import { gothamBook } from '../../../constants/fonts';

export default StyleSheet.create({
  inputStyles: {
    ...gothamBook,
    color: '#74859E',
    height: '100%',
    fontSize: 17,
    lineHeight: 26,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  inputContainerStyle: {
    height: 50,
    borderBottomWidth: 0,
  },
  inputContainer: {
    marginTop: 15,
    paddingHorizontal: 0,
  },
});
