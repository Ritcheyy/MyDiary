import 'react-native-gesture-handler';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

import * as Screens from './src/screens';
import {setCustomText} from 'react-native-global-props';
import {CustomTextProps} from './src/assets/styles/GlobalStyles';
import {getColorByTheme} from './src/assets/styles/Theme';
import {CHANGE_THEME} from './src/redux/actionTypes';

setCustomText(CustomTextProps);
EStyleSheet.build();

enableScreens();
const {Navigator, Screen} = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPrevThemeMode();
  }

  async getPrevThemeMode() {
    try {
      const value = await AsyncStorage.getItem('@theme');
      if (value !== null) {
        this.props.toggleTheme(value);
      } else {
        this.props.toggleTheme('dark');
      }
    } catch (e) {
      this.props.toggleTheme('dark');
    }
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={getColorByTheme(this.props.theme)}
          barStyle={getColorByTheme(this.props.theme, 'statusBar')}
        />
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Home" component={Screens.Home} />
          <Screen name="NoteView" component={Screens.NoteView} />
        </Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({theme: state.themeReducer.theme});
const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (theme) =>
    dispatch({
      type: CHANGE_THEME,
      payload: {theme},
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
