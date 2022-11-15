import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.defaultGreyColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 30,
    color: 'white',
    paddingTop: 20,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.defaultGreenColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  buttonPlaceHolder: {
    color: Colors.defaultDarkColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 15,
  },
});
