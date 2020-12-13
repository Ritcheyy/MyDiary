import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BaseHeaderStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getColorByTheme} from '../../assets/styles/Theme';
import {connect} from 'react-redux';
import {CHANGE_THEME} from '../../redux/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const BaseHeader = ({
  theme,
  headerType,
  noteviewEditMode,
  handleGoBack,
  toggleTheme,
  toggleEditMode,
  saveNote,
  deleteNote,
}) => {
  const handleThemeToggle = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme(newTheme);
    try {
      AsyncStorage.setItem('@theme', newTheme);
    } catch (e) {
      // saving error
    }
  };

  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={[
        BaseHeaderStyles.wrapper,
        headerType === 'noteview' ? BaseHeaderStyles.elevatedWrapper : null,
        {backgroundColor: getColorByTheme(theme)},
      ]}>
      {headerType === 'home' ? (
        <Text
          style={[
            BaseHeaderStyles.title,
            {color: getColorByTheme(theme, 'text')},
          ]}>
          Notes
        </Text>
      ) : (
        <TouchableOpacity
          style={BaseHeaderStyles.headerBtn}
          onPress={handleGoBack()}>
          <Icon name="angle-left" size={22} color="#FFF" />
        </TouchableOpacity>
      )}

      {headerType === 'home' ? (
        <TouchableOpacity
          style={BaseHeaderStyles.headerBtn}
          onPress={handleThemeToggle}>
          <Icon name="moon" size={22} color="#FFF" solid={isDarkTheme} />
        </TouchableOpacity>
      ) : null}
      {headerType === 'noteview' ? (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={BaseHeaderStyles.headerBtn}
            onPress={toggleEditMode()}>
            {noteviewEditMode ? (
              <Icon name="check-circle" size={22} color="#FFF" solid={true} />
            ) : (
              <Icon
                name="edit"
                size={18}
                color="#FFF"
                style={BaseHeaderStyles.editIcon}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[BaseHeaderStyles.headerBtn, {marginLeft: 15}]}
            onPress={deleteNote()}>
            <Icon name="times-circle" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      ) : null}
      {headerType === 'newNote' ? (
        <TouchableOpacity
          style={BaseHeaderStyles.headerBtn}
          onPress={saveNote()}>
          <Icon name="check-circle" size={22} color="#FFF" solid={true} />
        </TouchableOpacity>
      ) : null}
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
