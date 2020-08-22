import {StyleSheet, Dimensions} from 'react-native';
import {perfectSize} from '../../utils/pixelPerfect';
import Colors from '../../assets/styles/Colors';

const ScreenHeight = Dimensions.get('window').height;

const HomeStyles = StyleSheet.create({
  wrapper: {
    height: ScreenHeight,
  },

  cardsContainer: {
    paddingLeft: perfectSize(23),
    paddingRight: perfectSize(23),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const FabStyles = StyleSheet.create({
  btn: {
    position: 'absolute',
    width: perfectSize(74),
    height: perfectSize(74),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    bottom: perfectSize(40),
    right: perfectSize(40),
    backgroundColor: Colors.black,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

const NoteCardStyles = StyleSheet.create({
  noteCard: {
    height: perfectSize(153),
    borderRadius: perfectSize(8),
    // flexGrow: 1,
    marginBottom: perfectSize(12),
    paddingTop: perfectSize(20),
    paddingLeft: perfectSize(20),
    paddingRight: perfectSize(20),
    paddingBottom: perfectSize(40),
  },

  twin1: {
    width: '48.25%',
    backgroundColor: Colors.twin1,
    // backgroundColor: Colors.neonCarrot,
  },

  twin2: {
    width: '48.25%',
    backgroundColor: Colors.twin2,
  },

  wide: {
    width: '100%',
    backgroundColor: Colors.wide,
    paddingRight: perfectSize(111),
  },

  wideTitle: {
    fontSize: perfectSize(24),
  },

  wideDate: {
    fontSize: perfectSize(14),
    color: 'rgba(37, 37, 37, 0.53)',
    position: 'absolute',
    right: perfectSize(20),
    bottom: perfectSize(20),
    fontWeight: '500',
    letterSpacing: -0.5,
  },

  leftLong: {
    width: '48.25%',
    height: perfectSize(260),
    backgroundColor: Colors.leftLong,
  },

  rightLong: {
    width: '48.25%',
    height: perfectSize(260),
    marginTop: -perfectSize(98),
    backgroundColor: Colors.rightLong,
  },

  longCardTitle: {
    fontSize: perfectSize(19),
    lineHeight: perfectSize(25),
  },

  shortRight: {
    width: '48.25%',
    height: perfectSize(162),
    backgroundColor: Colors.shortRight,
  },

  shortLeft: {
    width: '48.25%',
    height: perfectSize(162),
    backgroundColor: Colors.shortLeft,
  },

  title: {
    fontSize: perfectSize(18),
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: -0.5,
  },

  date: {
    fontSize: perfectSize(14),
    color: 'rgba(37, 37, 37, 0.53)',
    position: 'absolute',
    left: perfectSize(20),
    bottom: perfectSize(20),
    fontWeight: '500',
    letterSpacing: -0.5,
  },
});

export {HomeStyles, FabStyles, NoteCardStyles};
