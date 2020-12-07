import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BaseHeaderStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getColorByTheme} from '../../assets/styles/Theme';
import {connect} from 'react-redux';
import {CHANGE_THEME} from '../../redux/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const BaseHeader = (props) => {
  const handleThemeToggle = () => {
    let newTheme = props.theme === 'dark' ? 'light' : 'dark';
    props.toggleTheme(newTheme);
    try {
      AsyncStorage.setItem('@theme', newTheme);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={BaseHeaderStyles.wrapper}>
      {!props.noteview ? (
        <Text
          style={[
            BaseHeaderStyles.title,
            {color: getColorByTheme(props.theme, 'text')},
          ]}>
          Notes
        </Text>
      ) : (
        <TouchableOpacity
          style={BaseHeaderStyles.headerBtn}
          onPress={() => props.handleGoBack()}>
          <Icon
            name="angle-left"
            size={22}
            color="#FFF"
            solid={props.theme === 'dark'}
          />
        </TouchableOpacity>
      )}

      {!props.noteview ? (
        <TouchableOpacity
          style={BaseHeaderStyles.headerBtn}
          onPress={handleThemeToggle}>
          <Icon
            name="moon"
            size={22}
            color="#FFF"
            solid={props.theme === 'dark'}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={BaseHeaderStyles.headerBtn}>
          <Icon
            name="edit"
            size={18}
            color="#FFF"
            style={BaseHeaderStyles.editIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({theme: state.themeReducer.theme});
const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (theme) =>
    dispatch({
      type: CHANGE_THEME,
      payload: {
        theme,
      },
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(BaseHeader);
