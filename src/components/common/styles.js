import {StyleSheet} from 'react-native';
import Colors from '../../assets/styles/Colors';
import {perfectSize} from '../../utils/pixelPerfect';

const BaseHeaderStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: perfectSize(12),
    paddingBottom: perfectSize(10),
    paddingLeft: perfectSize(23),
    paddingRight: perfectSize(23),
  },
  elevatedWrapper: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 0,
  },
  title: {
    fontSize: perfectSize(32),
    fontFamily: 'TTNorms-Medium',
  },
  headerBtn: {
    width: perfectSize(43),
    height: perfectSize(43),
    backgroundColor: Colors.gray,
    borderRadius: perfectSize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    top: perfectSize(12),
    right: perfectSize(10),
    position: 'absolute',
  },
});

export {BaseHeaderStyles};
