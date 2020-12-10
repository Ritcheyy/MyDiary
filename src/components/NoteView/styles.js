import {StyleSheet, Dimensions, Platform} from 'react-native';
import {perfectSize} from '../../utils/pixelPerfect';
import Colors from '../../assets/styles/Colors';

const ScreenHeight = Dimensions.get('window').height;

const NoteViewStyles = StyleSheet.create({
  wrapper: {
    height: ScreenHeight,
    flex: 1,
  },
  content: {
    paddingLeft: perfectSize(23),
    paddingRight: perfectSize(23),
    marginTop: perfectSize(8),
  },
  noteTitle: {
    fontFamily: 'TTNorms-Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : '300',
    fontSize: perfectSize(30),
    color: Colors.white,
    lineHeight: perfectSize(36),
  },
  noteDate: {
    marginTop: perfectSize(30),
    marginBottom: perfectSize(20),
    fontSize: perfectSize(16),
    fontFamily: 'TTNorms-Medium',
    color: Colors.gray_2,
  },
  noteText: {
    fontFamily: 'TTNorms-Medium',
    color: Colors.white,
    fontSize: perfectSize(16),
    lineHeight: perfectSize(30),
    paddingBottom: perfectSize(100),
  },
});

export {NoteViewStyles};
