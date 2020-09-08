import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../constants';

import {
  gothamMediumRegular,
  gothamBook,
  gothamBold,
} from '../../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 15,
  },
  titleHeader: {
    ...gothamMediumRegular,
    fontSize: 17,
    lineHeight: 30,
    marginBottom: 15,
  },
  rowBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  block: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexBasis: '48%',
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockText: {
    ...gothamBook,
    fontSize: 13,
    lineHeight: 26,
  },
  description: {
    ...gothamBook,
    marginTop: 20,
    fontSize: 15,
    lineHeight: 27,
    textAlign: 'justify',
  },

  pickerBlock: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  blockBottomText: {
    ...gothamBook,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '300',
    color: colors.LABEL_GREY_COLOR,
  },
  btnTitle: {
    ...gothamBold,
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
  },
  buttonSend: {
    backgroundColor: colors.HEADER,
    height: 50,
    marginVertical: 15,
  },
});
