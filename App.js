import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './src/screens/Home/index';
import {setCustomText} from 'react-native-global-props';
import {CustomTextProps} from './src/assets/styles/GlobalStyles';
import {getColorByTheme} from './src/assets/styles/Theme';

setCustomText(CustomTextProps);
EStyleSheet.build();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null,
    };
    this.getPrevThemeMode();
  }

  async getPrevThemeMode() {
    let themeMode = '';
    try {
      const value = await AsyncStorage.getItem('@theme');
      if (value !== null) {
        this.setState({
          theme: value,
        });
      } else {
        // themeMode = 'light';
      }
    } catch (e) {
      // themeMode = 'light';
    }
    return themeMode;
  }

  async toggleTheme() {
    const newThemeVal = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({
      theme: newThemeVal,
    });
    try {
      await AsyncStorage.setItem('@theme', newThemeVal);
    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle={getColorByTheme(this.state.theme, 'statusBar')} />
        <Home
          theme={this.state.theme}
          toggleTheme={this.toggleTheme.bind(this)}
        />
      </>
    );
  }
}

export default App;
