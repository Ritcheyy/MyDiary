import {StyleSheet} from 'react-native';
import Colors from '../../assets/styles/Colors';
import {perfectSize} from '../../utils/pixelPerfect';

const BaseHeaderStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: perfectSize(12),
    marginBottom: perfectSize(22),
    paddingLeft: perfectSize(23),
    paddingRight: perfectSize(23),
  },
  title: {
    fontSize: perfectSize(32),
    fontFamily: 'TTNorms-Medium',
  },
  searchBtn: {
    width: perfectSize(43),
    height: perfectSize(43),
    backgroundColor: Colors.gray,
    borderRadius: perfectSize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {BaseHeaderStyles};
