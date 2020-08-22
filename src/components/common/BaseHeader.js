import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BaseHeaderStyles} from '../common/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getColorByTheme} from '../../assets/styles/Theme';

const BaseHeader = (props) => {
  return (
    <View style={BaseHeaderStyles.wrapper}>
      <Text
        style={[
          BaseHeaderStyles.title,
          {color: getColorByTheme(props.theme, 'title')},
        ]}>
        Notes
      </Text>

      <TouchableOpacity
        style={BaseHeaderStyles.searchBtn}
        onPress={() => props.toggleTheme()}>
        <Icon
          name="moon"
          size={22}
          color="#FFF"
          solid={props.theme === 'dark'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BaseHeader;
